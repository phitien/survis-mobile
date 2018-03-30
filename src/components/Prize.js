import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Prize as style} from '../theme/styles/components'

import {Image} from './Image'
import {Component} from './Component'

export class Prize extends Component {
  render() {
    const {item} = this.props
    const selected = this.props.Prize.Prizes.list.find(o => o.selected) == item
    return <View style={[style.container, selected ? style.selected : {}]}>
      <View style={style.image}><Image source={{uri: item.image}}/></View>
      {selected ? <Icon style={style.icon} name='ios-arrow-dropdown-circle'/> : null}
      <View mt><Text>{item.name}</Text></View>
      <View mt><Text small>{item.description}</Text></View>
      <View horizontal center middle mt>
        <View mr style={style.sponsor_image}><Image source={{uri: item.sponsor_image}}/></View>
        <Text bold small theme>{item.sponsor_name}</Text>
      </View>
    </View>
  }
}
