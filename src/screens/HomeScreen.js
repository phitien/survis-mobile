import React, {Component} from 'react'
import {Container, View, Text, List} from 'native-base'
import {TouchableOpacity} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

import {HomeScreen as style} from '../../survis-themes/styles/screens'

import {getUser, getPaymentInfo, requestHeader} from '../utils'
import {Header, Footer, Categories, Promotions, NewShops, HighRatingShops} from '../containers'
import {Component as Screen, NewShop, Shop} from '../components'

export class HomeScreen extends Screen {
  async componentDidMount() {
    const User = JSON.parse(await getUser()) || {token: ''}
    requestHeader('token', User.token)
    this.actions.User_Load(User)

    const PaymentInfo = JSON.parse(await getPaymentInfo())
    this.actions.PaymentInfo_Load(PaymentInfo)

    this.locationUpdate(this.actions.Shops_Get)
    if (this.logged) {
      this.actions.Notifications_Get()
    }
  }
  loadmore() {
    this.actions.Shops_Loadmore()
    this.locationUpdate(this.actions.Shops_Get)
  }

  renderShop(item) {
    return <TouchableOpacity key={item.id} onPress={e => this.Actions.ShopScreen({item})}>
      <Shop item={item}/>
    </TouchableOpacity>
  }
  renderShops() {
    return <List renderRow={item => this.renderShop(item)} dataArray={this.props.Shops.list} canLoadMore={true}/>
  }
  render() {
    return <Container>
      <Header/>
      <InfiniteScroll horizontal={false} distanceFromEnd={10} onLoadMoreAsync={this.loadmore.bind(this)}>
        <Categories/>
        <Promotions/>
        <View style={style.newshops}>
          <Text style={style.newshops_text}>New Shops</Text>
          <NewShops/>
        </View>
        <HighRatingShops/>
        {this.renderShops()}
      </InfiniteScroll>
      <Footer/>
    </Container>
  }
}
