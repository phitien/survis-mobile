import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {History as style} from '../theme/styles/components'

import {itemHelper, substr} from '../utils'

import {Image} from './Image'

const History = props => {
  const {
    id, image, name, description, priceS, orderdate
  } = itemHelper(props.item)
  return <View horizontal mt mr ml white>
    <View mr style={style.image_container}><Image style={style.image} source={{uri: image}}/></View>
    <View flex1 style={style.info}>
      <View><Text bold>{name}</Text></View>
      <View><Text small>{description}</Text></View>
      <View><Text bold theme>{priceS}</Text></View>
      <View><Text small>{orderdate}</Text></View>
    </View>
  </View>
}

export {
  History
}
