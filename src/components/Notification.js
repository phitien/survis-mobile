import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Notification as style} from '../theme/styles/components'

import {Image} from './Image'

const Notification = props => {
  const item = props.item, index = props.index
  const {id, image, title, message, date} = item || {}
  return <View flex1 mt ml mr horizontal style={[style.container, index%2 == 1 ? style.even : style.odd]}>
    <View style={style.image_container}><Image style={style.image} source={{uri: image}}/></View>
    <View p>
      <View><Text bold>{title}</Text></View>
      <View smt><Text small>{message}</Text></View>
      <View smt><Text small>{date}</Text></View>
    </View>
  </View>
}

export {
  Notification
}
