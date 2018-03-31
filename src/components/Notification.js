import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Notification as style} from '../theme/styles/components'

import {Image} from './Image'

const Notification = props => {
  const item = props.item, index = props.index
  const {id, image, title, message, date} = item || {}
  return <View mt ml mr horizontal {...{grey: index%2!=0}}>
    <View small-size-square><Image source={{uri: image}}/></View>
    <View p flex1>
      <View full><Text bold>{title}</Text></View>
      <View full smt><Text small>{message}</Text></View>
      <View full smt><Text small>{date}</Text></View>
    </View>
  </View>
}

export {
  Notification
}
