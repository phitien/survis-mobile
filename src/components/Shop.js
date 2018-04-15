import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import {Platform, Dimensions, PixelRatio} from 'react-native'

import {Shop as style} from '../theme/styles/components'

import {itemHelper, substr, openOnMap} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'
import {Component} from './Component'

export class Shop extends Component {
  state = {totalrate: this.item.totalrate || 0}
  get item() {return this.props.item || {}}

  onRate(rating) {
    if (this.logged) {
      this.actions.Shop_Rate({id: this.item.id, type: 'shop', rate: rating})
      .then(res => this.setState({totalrate: res.data.results.totalrate}))
    }
  }

  render() {
    const {
      id, isfeatured, promotion_image, name, address, image, highlight, distance,
      latitude, longitude, totalrate, totalreviews
    } = itemHelper(this.item)
  	if (isfeatured) {
  		return <View mt ml mr white>
        <View normal-size><Image source={{uri: promotion_image}}/></View>
        <View bottom opacity sp full>
          <View full><Text white bold>{name}</Text></View>
          <View full><Text small white>{address}</Text></View>
        </View>
      </View>
  	}
    return <View horizontal mt ml mr white>
      <View normal-size-square><Image source={{uri: image}}/></View>
      <View flex1 smt pl pr spb>
        <View full><Text bold>{name}</Text></View>
        <View full><Text small>{address}</Text></View>
        <Touch onPress={e => openOnMap(latitude, longitude, name)}><View horizontal full>
          <Text small>{distance}</Text>
          <View horizontal ml>
            <Icon theme small name='ios-send'/>
            <Text small theme>Get direction</Text>
          </View>
        </View></Touch>
        <View full smt smb><Text theme bold>{highlight}</Text></View>
        <View horizontal space-between style={style.statistic}>
          <Rating totalrate={this.state.totalrate} shopid={id} onRate={this.onRate.bind(this)}
            fullStarColor='black' emptyStarColor='black'
          />
          <View horizontal>
            <Text small grey>(</Text>
            <Text small theme>{totalreviews}</Text>
            <Text small grey>)</Text>
            <Text small grey sml>Reviews</Text>
          </View>
        </View>
      </View>
    </View>
  }
}
