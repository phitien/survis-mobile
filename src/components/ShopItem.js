import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {ShopItem as style} from '../theme/styles/components'

import {itemHelper, substr} from '../utils'

import {Image} from './Image'

const ShopItem = props => {
  const item = props.item
  const odd = props.odd
  const {
    image, name, description, priceS
  } = itemHelper(item)
  return (
    <View horizontal mt ml mb white style={[style.container, odd ? style.odd : style.even]}>
      <View mr style={style.image_container}><Image style={style.image} source={{uri: image}}/></View>
      <View>
        <Text bold>{name}</Text>
        <Text small smt>{description}</Text>
        <Text smt theme>{priceS}</Text>
      </View>
    </View>
  )
}

export {
  ShopItem
}
