import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Notification as style} from '../../survis-themes/styles/components'

import {Image} from './Image'

const Notification = props => {
  const item = props.item, index = props.index
  return <View m-b-5 horizontal style={[style.container, index%2 == 1 ? style.even : style.odd]}>
    <Image resizeMode='stretch' style={style.image} source={{uri: item.image}}/>
    <View p-5>
      <View horizontal m-t-5>
        <Text fs14 bold>{item.title}</Text>
      </View>
      <View horizontal>
        <Text fs12>{item.message}</Text>
      </View>
      <View m-t-5>
        <Text fs12>{item.date}</Text>
      </View>
    </View>
  </View>
}

export {
  Notification
}
