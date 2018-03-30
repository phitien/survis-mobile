import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {HighRatingShop as style} from '../theme/styles/components'

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
  	return <View big-size>
      <View big-size><Image source={{uri: image}}/></View>
      <View bottom opacity sp full>
        <View full smb>
          <Text white big>{name}</Text>
        </View>
        <View horizontal full space-between>
          <Rating totalrate={totalrate} shopid={id}/>
          <Text ml white small>({totalreviews}) Reviews</Text>
          <View horizontal>
            <Icon theme small name='ios-send'/>
            <Text white small theme onPress={e => openOnMap(latitude, longitude)}>Get direction</Text>
          </View>
        </View>
      </View>
    </View>
  }
}
