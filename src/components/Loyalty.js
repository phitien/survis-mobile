import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Loyalty as style} from '../theme/styles/components'
import {itemHelper, substr} from '../utils'
import {Image} from './Image'

const Loyalty = props => {
  const {
    id, image, name, address, numberoforders, latestorderdate, spentamount
  } = itemHelper(props.item)
  return <View horizontal mt mr ml white>
    <View normal-size-square mr><Image source={{uri: image}}/></View>
    <View flex1>
      <View full><Text bold>{name}</Text></View>
      <View full><Text small><Icon theme small name='ios-send'/> {address}</Text></View>
      <View full><Text small>Visits: {numberoforders}</Text></View>
      <View full><Text bold theme>Total: {spentamount}</Text></View>
      <View full><Text small>Last order: {latestorderdate}</Text></View>
    </View>
  </View>
}

export {
  Loyalty
}
