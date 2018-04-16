import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {HighRatingShop as style} from '../theme/styles/components'

import {itemHelper, substr, openOnMap} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'
import {Component} from './Component'

export class HighRatingShop extends Component {
  state = {totalrate: this.item.totalrate || 0}
  get item() {return this.props.item || {}}

  render() {
    const {
      id, image, name, totalreviews, latitude, longitude
    } = itemHelper(this.item)
  	return <View big-size>
      <View big-size><Image source={{uri: image}}/></View>
      <View bottom opacity sp full>
        <View full smb>
          <Text white big>{name}</Text>
        </View>
        <View horizontal full space-between>
          <Rating rating={this.state.totalrate}/>
          <Text ml white small>({totalreviews}) Reviews</Text>
          <View horizontal>
            <Icon theme small name='ios-send'/>
            <Text white small theme onPress={e => openOnMap(latitude, longitude, name)}>Get direction</Text>
          </View>
        </View>
      </View>
    </View>
  }
}
