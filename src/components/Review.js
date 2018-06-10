import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Review as style} from '../theme/styles/components'

import {Component} from './Component'

export class Review extends Component {
  render() {
    const {item, index} = this.props
    const {comment, created_date, lname, fname} = this.utils.itemHelper(item)
    return <View full p {...{white:index%2==0}}>
      <View horizontal middle full>
        <Text theme>{[fname, lname].filter(o => o).join(' ')}</Text>
        <Text ml flex1>{comment}</Text>
      </View>
      <Text grey small>{created_date}</Text>
    </View>
  }
}
