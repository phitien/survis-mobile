import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {ShopItem as style} from '../../survis-themes/styles/components'

import {itemHelper, substr} from '../utils'

import {Image} from './Image'

const ShopItem = props => {
  const item = props.item
  const odd = props.odd
  const {
    image, name, description, priceS
  } = itemHelper(item)
  return (
    <View horizontal style={{...style.container, backgroundColor: odd ? style.oddBgColor : style.evenBgColor}}>
      <Image resizeMode='stretch' style={style.image} source={{uri: image}}/>
      <View>
        <Text style={style.name}>{name}</Text>
        <Text style={style.description}>{description}</Text>
        <Text style={style.price}>{priceS}</Text>
      </View>
    </View>
  )
}

export {
  ShopItem
}
