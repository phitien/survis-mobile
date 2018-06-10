import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Image} from './Image'
import {Component} from './Component'

export class Prize extends Component {
  get klass() {return 'Prize'}
  get selected() {return this.props.selected}
  render() {
    const {item} = this.props
    const selected = this.selected
    const {cmpStyle} = this
    return <View style={[cmpStyle.container, selected ? cmpStyle.selected : {}]}>
      <View style={cmpStyle.image}><Image source={{uri: item.image}}/></View>
      {selected ? <Icon style={cmpStyle.icon} name='ios-arrow-dropdown-circle'/> : null}
      <View mt><Text>{item.name}</Text></View>
      <View mt><Text small>{item.description}</Text></View>
      <View horizontal center middle mt>
        <View mr style={cmpStyle.sponsor_image}><Image source={{uri: item.sponsor_image}}/></View>
        <Text bold small theme>{item.sponsor_name}</Text>
      </View>
    </View>
  }
}
