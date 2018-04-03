import React, {Component} from 'react'
import {Container, View, Text, List} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

import {HomeScreen as style} from '../theme/styles/screens'

import {Header, Footer, Categorys, Promotions, NewShops, HighRatingShops} from '../containers'
import {Screen, NewShop, Shop} from '../components'

export class HomeScreen extends Screen {
  async componentDidMount() {
    this.loadUser(e => {
      this.loadPaymentInfo()
      this.loadShoppingCartItems()
      this.loadNotifications()
    })
    this.loadDevice()
    await this.locationUpdate(this.actions.Shop_Shops)
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
    return <InfiniteScroll horizontal={false} distanceFromEnd={10} onLoadMoreAsync={this.loadmore.bind(this)}>
      <Categorys/>
      <Promotions/>
      <NewShops/>
      <HighRatingShops/>
      {this.renderShops()}
    </InfiniteScroll>
  }
}
