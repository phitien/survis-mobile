import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Component} from './Component'

export class Review extends Component {
  get klass() {return 'Review'}
  render() {
    const {item, index} = this.props
    const {comment, created_date, email, fullname} = this.utils.itemHelper(item)
    return <View full p {...{white:index%2==0}}>
      <View horizontal middle full>
        <Text theme>{fullname}</Text>
        <Text ml flex1>{comment}</Text>
      </View>
      <Text grey small>{created_date}</Text>
    </View>
  }
}
