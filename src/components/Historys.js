import React from 'react'
import {Text, Spinner, Icon, View, Content} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

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
  get refreshing() {return this.state.refreshing || this.props.History.loading || false}
  refresh() {
    if (!this.props.History.loading) {
      this.actions.History_Reset()
      this.actions.History_Historys()
    }
  }
  loadmore() {
    if (!this.props.History.loading) {
      this.actions.History_Loadmore()
      this.actions.History_Historys()
    }
  }

  render() {
    // if (this.props.History.loading) return this.renderLoading()
    return <InfiniteScroll key='main' horizontal={false} distanceFromEnd={10} style={{flex:1}}
        // refreshControl={this.refreshControl}
        onLoadMoreAsync={this.loadmore.bind(this)}>
        {this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={e => this.open('ShopItemScreen', {item: item.item, shop: item.shop})}>
        <History item={item} index={i}/>
      </Touch>)}
    </InfiniteScroll>
  }
}
