import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Loyalty as style} from '../../survis-themes/styles/components'
import {itemHelper, substr} from '../utils'
import {Image} from './Image'

const Loyalty = props => {
  const {
    id, image, name, address, numberoforders, latestorderdate, spentamount
  } = itemHelper(props.item)
  return <View horizontal style={style.container}>
    <View m-r-10><Image style={style.image} source={{uri: image}}/></View>
    <View flex1>
      <View full><Text fs14 bold>{name}</Text></View>
      <View full><Text fs12><Icon small name='ios-send'/> {address}</Text></View>
      <View full><Text fs12>Visits: {numberoforders}</Text></View>
      <View full><Text fs14 bold theme>Total: {spentamount}</Text></View>
      <View full><Text fs12>Last order: {latestorderdate}</Text></View>
    </View>
  </View>
}

export {
  Loyalty
}
