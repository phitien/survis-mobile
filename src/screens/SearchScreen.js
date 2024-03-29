import React, {Component} from 'react'
import {Container, View, Text, List} from 'native-base'
import InfiniteScroll from 'react-native-infinite-scroll'
import {TouchableOpacity as Touch} from 'react-native'

import {Header, Footer, Categorys} from '../containers'
import {NewShop, Shop} from '../components'
import {Screen} from '../components'

export class SearchScreen extends Screen {
  get klass() {return 'SearchScreen'}
  get items() {return [].concat(this.props.Shop.SearchShops.list).filter(o => o)}
  get back() {return this.props.Category.Categorys.filter.catid ? true : false}

  async componentDidMount() {
    await this.locationUpdate().finally(this.actions.Shop_SearchShops)
  }
  refresh() {
    if (!this.props.Shop.loading) {
      this.actions.Shop_SearchShops_Reset()
      .then(e => this.locationUpdate.finally(this.actions.Shop_SearchShops))
    }
  }
  loadmore() {
    if (!this.props.Shop.loading) {
      this.actions.Shop_SearchShops_Loadmore()
      this.actions.Shop_SearchShops()
    }
  }

  renderShop(item) {
    return <Touch key={item.id} onPress={e => this.open('ShopScreen', {item})}>
      <Shop item={item}/>
    </Touch>
  }
  renderShops() {
    return <List renderRow={item => this.renderShop(item)} dataArray={this.items} canLoadMore={true}/>
  }
  renderContent() {
    return <InfiniteScroll horizontal={false} distanceFromEnd={10}
      refreshControl={this.refreshControl}
      onLoadMoreAsync={this.loadmore.bind(this)}>
      <Categorys/>
      {this.renderShops()}
    </InfiniteScroll>
  }
}
