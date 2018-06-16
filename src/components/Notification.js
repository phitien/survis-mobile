import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Image} from './Image'
import {Component} from './Component'

export class Notification extends Component {
  get klass() {return 'Notification'}
  render() {
    const item = this.props.item, index = this.props.index
    const {id, image, title, message, date, is_read} = this.utils.itemHelper(item || {})
    return <View mt ml mr horizontal {...{grey: is_read==0}}>
      <View small-size-square mt ml><Image source={{uri: image}}/></View>
      <View p flex1>
        <View full><Text bold>{title}</Text></View>
        <View full smt><Text small>{message}</Text></View>
        <View full smt><Text small>{date}</Text></View>
      </View>
    </View>
  }
}
