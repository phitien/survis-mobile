import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {Review as style} from '../theme/styles/components'

const Review = props => {
  const item = props.item || {}
  const {comment, created_date} = item
  return <Touch onPress={props.onPress}>
    <View horizontal center middle transparent style={style.container}>
      <Text small>{comment}</Text>
      <Text small>{created_date}</Text>
    </View>
  </Touch>
}

export {
  Review
}
