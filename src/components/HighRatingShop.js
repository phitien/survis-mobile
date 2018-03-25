import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {HighRatingShop as style} from '../../survis-themes/styles/components'

import {itemHelper, substr, openOnMap} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'
import {Component} from './Component'

export class HighRatingShop extends Component {
  render() {
    const item = this.props.item
    const {
      id, image, name, totalrate, totalreviews, latitude, longitude
    } = itemHelper(item)
  	return <View style={style.container}>
      <Image style={style.image} source={{uri: image}}/>
      <View style={style.info}>
        <View style={{flex:1}}>
          <Text white fs20>{name}</Text>
        </View>
        <View horizontal space-between>
          <View horizontal>
            <View m-r-10>
              <Rating totalrate={totalrate} shopid={id}/>
            </View>
            <Text white fs12>({totalreviews}) Reviews</Text>
          </View>
          <View horizontal>
            <Icon new-shop name='ios-send'/>
            <Text white fs12 theme onPress={e => openOnMap(latitude, longitude)}>Get direction</Text>
          </View>
        </View>
      </View>
    </View>
  }
}
