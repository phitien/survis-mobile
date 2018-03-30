import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {ShopItem as style} from '../theme/styles/components'

import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {Component} from './Component'

export class ShopItem extends Component {
  render() {
    const {item, index} = this.props
    const {
      image, name, description, priceS
    } = itemHelper(item)
    return <View horizontal mt ml mr {...{grey: index%2 != 0}}>
      <View normal-size-square><Image source={{uri: image}}/></View>
      <View flex1 pl pr spt spb>
        <View full><Text bold>{name}</Text></View>
        <View full><Text small smt>{description}</Text></View>
        <View full><Text smt theme>{priceS}</Text></View>
      </View>
    </View>
  }
}
