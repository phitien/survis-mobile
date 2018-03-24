import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Prize as style} from '../../survis-themes/styles/components'

import {Image} from './Image'
import {Component} from './Component'

export class Prize extends Component {
  render() {
    const {item} = this.props
    const selected = this.props.Prizes.list.find(o => o.selected) == item
    return <View style={[style.container, selected ? style.selected : {}]}>
      <Image style={style.image} source={{uri: item.image}}/>
      {selected ? <Icon style={style.icon} name='ios-arrow-dropdown-circle'/> : null}
      <View mt><Text fs12 bold>{item.name}</Text></View>
      <View mt><Text fs12>{item.description}</Text></View>
      <View horizontal center middle mt>
        <View mr><Image style={style.sponsor_image} source={{uri: item.sponsor_image}}/></View>
        <Text bold fs12 theme>{item.sponsor_name}</Text>
      </View>
    </View>
  }
}
