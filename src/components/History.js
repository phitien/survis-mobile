import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Image} from './Image'
import {Component} from './Component'

export class History extends Component {
  get klass() {return 'History'}
  render() {
    const {
      id, image, name, description, priceS, orderdate
    } = this.utils.itemHelper(this.props.item)
    return <View horizontal mt mr ml white>
      <View normal-size-square mr><Image source={{uri: image}}/></View>
      <View flex1 style={this.cmpStyle.info}>
        <View><Text bold>{name}</Text></View>
        <View><Text small>{description}</Text></View>
        <View><Text bold theme>{priceS}</Text></View>
        <View><Text small>{orderdate}</Text></View>
      </View>
    </View>
  }
}
