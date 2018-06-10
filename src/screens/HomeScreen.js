import React, {Component} from 'react'
import {Container, View, Text, List} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

import {Header, Footer, Categorys, Promotions, NewShops, HighRatingShops} from '../containers'
import {Screen, NewShop, Shop} from '../components'

export class HomeScreen extends Screen {
  get klass() {return 'HomeScreen'}

  async componentDidMount() {
    this.loadUser(e => {
      this.loadPaymentInfo()
      this.loadShoppingCartItems()
      this.loadNotifications()
    })
    this.loadDevice()
    await this.locationUpdate(this.actions.Shop_Shops)
  }
  refresh() {
    if (!this.props.Shop.loading) {
      this.actions.Shop_Reset()
      this.actions.Shop_Shops()
    }
  }
  loadmore() {
    if (!this.props.Shop.loading) {
      this.actions.Shop_Loadmore()
      this.actions.Shop_Shops()
    }
  }

  renderShop(item) {
    return <Touch key={item.id} onPress={e => this.open('ShopScreen', {item})}>
      <Shop item={item}/>
    </Touch>
  }
  renderShops() {
    return <List renderRow={item => this.renderShop(item)} dataArray={this.props.Shop.Shops.list} canLoadMore={true}/>
  }
  renderContent() {
    return <InfiniteScroll key='main' horizontal={false} distanceFromEnd={10}
      refreshControl={this.refreshControl}
      onLoadMoreAsync={this.loadmore.bind(this)}>
      <Categorys ref={e => this.categorys = e}/>
      <Promotions ref={e => this.promotions = e}/>
      <NewShops ref={e => this.newshops = e}/>
      <HighRatingShops ref={e => this.highratingshops = e}/>
      {this.renderShops()}
    </InfiniteScroll>
  }
}
