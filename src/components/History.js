import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {History as style} from '../../survis-themes/styles/components'

import {itemHelper, substr} from '../utils'

import {Image} from './Image'

const History = props => {
  const {
    id, image, name, description, priceS, orderdate
  } = itemHelper(props.item)
  return <View horizontal style={style.container}>
    <View m-r-10><Image style={style.image} source={{uri: image}}/></View>
    <View style={style.info}>
      <View><Text fs14 bold>{name}</Text></View>
      <View><Text fs12>{description}</Text></View>
      <View><Text fs14 bold theme>{priceS}</Text></View>
      <View><Text fs12>{orderdate}</Text></View>
    </View>
  </View>
}

export {
  History
}
