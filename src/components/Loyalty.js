import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Loyalty as style} from '../../survis-themes/styles/components'

import {Image} from './Image'

const Loyalty = props => {
  const item = props.item
  return <View horizontal style={style.container}>
    <Image resizeMode='stretch' style={style.image} source={{uri: item.image}}/>
    <View p-l-10>
      <View horizontal m-t-5>
        <Text fs14 bold>{item.name}</Text>
      </View>
      <View horizontal>
        <Text fs12>{item.address}</Text>
      </View>
      <View horizontal>
        <Icon new-shop name='ios-send'/>
        <Text fs12>{item.numberoforders}</Text>
      </View>
      <Text fs14 bold theme>${item.spentamount}</Text>
      <View m-t-5>
        <Text fs12>{item.latestorderdate}</Text>
      </View>
    </View>
  </View>
}

export {
  Loyalty
}
