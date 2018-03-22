import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity} from 'react-native'
import {Platform, Dimensions, PixelRatio} from 'react-native'

import {Shop as style} from '../../survis-themes/styles/components'

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
  		return <View horizontal style={style.container}>
        <Image resizeMode='stretch' style={style.featured_image} source={{uri: promotion_image}}/>
        <View style={style.featured_info}>
          <Text fs14 white bold>{name}</Text>
          <Text fs12 white>{address}</Text>
        </View>
      </View>
  	}
    return <View horizontal style={style.container}>
      <Image resizeMode='stretch' style={style.image} source={{uri: image}}/>
      <View p-l-10 style={style.info}>
        <View m-t-5 horizontal>
          <Text fs14 bold>{name}</Text>
        </View>
        <View horizontal>
          <Text fs12>{address}</Text>
        </View>
        <View horizontal m-t-5>
          <Text fs14 bold theme>{highlight}</Text>
        </View>
        <View horizontal space-between>
          <Text fs12>{distance}</Text>
          <TouchableOpacity onPress={e => openOnMap(latitude, longitude)}><View horizontal>
            <Icon new-shop name='ios-send'/>
            <Text white fs12 theme>Get direction</Text>
          </View></TouchableOpacity>
        </View>
        <View horizontal space-between style={style.statistic}>
          <View>
            <Rating totalrate={totalrate} shopid={id}/>
          </View>
          <Text fs12>({totalreviews}) Reviews</Text>
        </View>
      </View>
    </View>
  }
}
