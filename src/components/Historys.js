import React from 'react'
import {Text, Spinner, Icon, View, Content} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {Historys as style} from '../theme/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'
import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {History} from './History'
import {Component} from './Component'

export class Historys extends Component {
  get items() {return this.props.History.Historys.list || []}
  async componentDidMount() {
    if (this.logged) this.actions.History_Historys()
  }
  render() {
    if (this.props.History.loading) return this.renderLoading()
    return <View>{this.items.map((item,i) => <History key={`${i}-${item.id}`} item={item}/>)}</View>
  }
}
