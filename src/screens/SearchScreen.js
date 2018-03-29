import React, {Component} from 'react'
import {Container, View, Text, List} from 'native-base'
import InfiniteScroll from 'react-native-infinite-scroll'
import {TouchableOpacity as Touch} from 'react-native'

import {SearchScreen as style} from '../theme/styles/screens'

import {Header, Footer, Categorys} from '../containers'
import {Component as Screen, NewShop, Shop} from '../components'

export class SearchScreen extends Screen {
  get items() {return this.props.Shop.SearchShops.list || []}

  async componentDidMount() {
    this.locationUpdate(this.actions.Shop_SearchShops)
  }
  loadmore() {
    if (!this.props.Shop.loading) {
      this.actions.Shop_SearchShops_Loadmore()
      .then(e => this.locationUpdate(this.actions.Shop_SearchShops))
    }
  }

  renderShop(item) {
    return <Touch key={item.id} onPress={e => this.Actions.ShopScreen({item})}>
      <Shop item={item}/>
    </Touch>
  }
  renderShops() {
    return <List renderRow={item => this.renderShop(item)} dataArray={this.items} canLoadMore={true}/>
  }
  render() {
    return <Container>
      <Header/>
      <InfiniteScroll horizontal={false} distanceFromEnd={10} onLoadMoreAsync={this.loadmore.bind(this)}>
        <Categorys/>
        {this.renderShops()}
      </InfiniteScroll>
      <Footer/>
    </Container>
  }
}
