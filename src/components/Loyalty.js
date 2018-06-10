import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {itemHelper, substr} from '../utils'
import {Image} from './Image'
import {Component} from './Component'

export class Loyalty extends Component {
  get klass() {return 'Loyalty'}
  render() {
    const {
      id, image, name, address, visits, points, orders, latestorderdate, spentamount
    } = this.utils.itemHelper(this.props.item)
    return <View horizontal mt mr ml white>
      <View normal-size-square mr><Image source={{uri: image}}/></View>
      <View flex1>
        <View full><Text bold>{name}</Text></View>
        <View full><Text small><Icon theme small name='ios-send'/> {address}</Text></View>
        <View full><Text small>Orders: {orders}</Text></View>
        <View full><Text small>Visits: {visits}</Text></View>
        <View full><Text small>Points: {points}</Text></View>
        <View full><Text small>Last order: {latestorderdate}</Text></View>
      </View>
    </View>
  }
}
