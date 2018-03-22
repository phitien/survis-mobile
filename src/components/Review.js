import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity} from 'react-native'

import {Review as style} from '../../survis-themes/styles/components'

const Review = props => {
  const item = props.item
  if (!item) return null
  return <TouchableOpacity onPress={props.onPress}>
    <View horizontal style={style.container}>
      <Text fs12> {item.comment} </Text>
    </View>
    <View m-t-5>
      <Text fs12>{item.created_date}</Text>
    </View>
  </TouchableOpacity>
}

export {
  Review
}
