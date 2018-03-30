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
  render() {
    const item = this.props.item
    const {
      id, isfeatured, promotion_image, name, address, image, highlight, distance,
      latitude, longitude, totalrate, totalreviews
    } = itemHelper(item)
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
        <View full><Text theme>{highlight}</Text></View>
        <Touch onPress={e => openOnMap(latitude, longitude)}><View horizontal space-between full>
          <Text small>{distance}</Text>
          <View horizontal>
            <Icon theme small name='ios-send'/>
            <Text small theme>Get direction</Text>
          </View>
        </View></Touch>
        <View horizontal space-between style={style.statistic}>
          <Rating totalrate={totalrate} shopid={id}/>
          <Text small>({totalreviews}) Reviews</Text>
        </View>
      </View>
    </View>
  }
}
