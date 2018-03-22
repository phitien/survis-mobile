import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity} from 'react-native'

import {NewShop as style} from '../../survis-themes/styles/components'

import {itemHelper, substr, openOnMap} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'
import {Component} from './Component'

export class NewShop extends Component {
  render() {
    const item = this.props.item
    const {
      image, address, name, latitude, longitude, distance,
    } = itemHelper(item)
    return <View style={style.container}>
      <Image style={style.image} source={{uri: image}}/>
      <View style={style.address}>
        <Text fs12 white>{address}</Text>
      </View>
      <View style={style.info}>
        <View horizontal m-t-5>
          <Text fs12 bold>{name}</Text>
        </View>
        <TouchableOpacity onPress={e => openOnMap(latitude, longitude)}>
          <View horizontal>
            <Icon new-shop name='ios-pin'/>
            <Text fs12>{distance}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  }
}
