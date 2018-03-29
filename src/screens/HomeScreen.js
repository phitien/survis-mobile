import React, {Component} from 'react'
import {Container, View, Text, List} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'
import DeviceInfo from 'react-native-device-info'

import {HomeScreen as style} from '../theme/styles/screens'

import {getUser, getPaymentInfo, getShoppingCartItems, requestHeader} from '../utils'
import {Header, Footer, Categorys, Promotions, NewShops, HighRatingShops} from '../containers'
import {Component as Screen, NewShop, Shop} from '../components'

export class HomeScreen extends Screen {
  async componentDidMount() {

    const deviceId = await DeviceInfo.getDeviceId()
    requestHeader('deviceId', deviceId)
    this.actions.Device_Load({id: deviceId})

    const User = JSON.parse(await getUser()) || {token: ''}
    requestHeader('token', User.token)
    this.actions.User_Load(User)
    this.actions.PaymentInfo_Load(JSON.parse(await getPaymentInfo()))
    this.actions.ShoppingCartItem_LoadAll(JSON.parse(await getShoppingCartItems()))
    this.locationUpdate(this.actions.Shop_Shops)
    if (this.logged) this.actions.Notification_Notifications()
  }
  loadmore() {
    if (!this.props.Shop.loading) {
      this.actions.Shop_Loadmore()
      this.locationUpdate(this.actions.Shop_Shops)
    }
  }

  renderShop(item) {
    return <Touch key={item.id} onPress={e => this.Actions.ShopScreen({item})}>
      <Shop item={item}/>
    </Touch>
  }
  renderShops() {
    return <List renderRow={item => this.renderShop(item)} dataArray={this.props.Shop.Shops.list} canLoadMore={true}/>
  }
  render() {
    return <Container>
      <Header/>
      <InfiniteScroll horizontal={false} distanceFromEnd={10} onLoadMoreAsync={this.loadmore.bind(this)}>
        <Categorys/>
        <Promotions/>
        <NewShops/>
        <HighRatingShops/>
        {this.renderShops()}
      </InfiniteScroll>
      <Footer/>
    </Container>
  }
}
