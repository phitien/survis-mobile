import React from 'react'
import {Text, Spinner, Icon, View, Content} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

import {Loyaltys as style} from '../theme/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'
import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {Loyalty} from './Loyalty'
import {Component} from './Component'

export class Loyaltys extends Component {
  get klass() {return 'Loyaltys'}
  get items() {return this.props.Loyalty.Loyaltys.list || []}
  async componentDidMount() {
    if (this.logged) this.actions.Loyalty_Loyaltys()
  }
  get refreshing() {return this.state.refreshing || this.props.Loyalty.loading || false}
  refresh() {
    if (!this.props.Loyalty.loading) {
      this.actions.Loyalty_Reset()
      this.actions.Loyalty_Loyaltys()
    }
  }
  loadmore() {
    if (!this.props.Loyalty.loading) {
      this.actions.Loyalty_Loadmore()
      this.actions.Loyalty_Loyaltys()
    }
  }
  render() {
    return <InfiniteScroll key='main' horizontal={false} distanceFromEnd={10} style={{flex:1}}
      // refreshControl={this.refreshControl}
      onLoadMoreAsync={this.loadmore.bind(this)}>
      {this.props.Loyalty.loading ? <View key='loading' tiny-size>{this.renderLoading()}</View> : null}
      {this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={e => this.open('ShopScreen', {item})}>
        <Loyalty item={item} index={i}/>
      </Touch>)}
    </InfiniteScroll>
  }
}
