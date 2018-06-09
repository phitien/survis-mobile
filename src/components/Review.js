import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Review as style} from '../theme/styles/components'
import {date} from '../utils'

const Review = props => {
  const {item, index} = props
  const {comment, created_date, lname, fname} = item || {}
  return <View full p {...{white:index%2==0}}>
    <View horizontal middle full>
      <Text theme>{[fname, lname].filter(o => o).join(' ')}</Text>
      <Text ml flex1>{comment}</Text>
    </View>
    <Text grey small>{date(created_date).toLocaleDateString()}</Text>
  </View>
}

export {
  Review
}
