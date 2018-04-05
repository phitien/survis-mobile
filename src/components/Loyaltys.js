import React from 'react'
import {Text, Spinner, Icon, View, Content} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {Loyaltys as style} from '../theme/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'
import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {Loyalty} from './Loyalty'
import {Component} from './Component'

export class Loyaltys extends Component {
  get items() {return this.props.Loyalty.Loyaltys.list || []}
  async componentDidMount() {
    if (this.logged) this.actions.Loyalty_Loyaltys()
  }
  render() {
    if (this.props.Loyalty.loading) return this.renderLoading()
    return <View>{this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={e => this.open('ShopScreen', {item})}>
      <Loyalty item={item} index={i}/>
    </Touch>)}</View>
  }
}
