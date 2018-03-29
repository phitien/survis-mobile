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
  		return <View horizontal mt ml mr white>
        <View style={style.featured_image_container}><Image style={style.featured_image} source={{uri: promotion_image}}/></View>
        <View bottom opacity sp full>
          <Text white bold>{name}</Text>
          <Text small white>{address}</Text>
        </View>
      </View>
  	}
    return <View horizontal mt ml mr white style={style.container}>
      <View style={style.image_container}><Image style={style.image} source={{uri: image}}/></View>
      <View pl smt style={style.info}>
        <View><Text bold>{name}</Text></View>
        <View><Text small>{address}</Text></View>
        <View smt smb><Text theme>{highlight}</Text></View>
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
