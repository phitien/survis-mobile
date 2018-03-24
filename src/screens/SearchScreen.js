import React, {Component} from 'react'
import {Container, View, Text, List} from 'native-base'
import InfiniteScroll from 'react-native-infinite-scroll'
import {TouchableOpacity as Touch} from 'react-native'

import {SearchScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer, Categories} from '../containers'
import {Component as Screen, NewShop, Shop} from '../components'

export class SearchScreen extends Screen {
  async componentDidMount() {
    this.locationUpdate(this.actions.Search_Get)
  }
  loadmore() {
    if (!this.props.Search.loading) this.actions.Search_Loadmore()
    this.locationUpdate(this.actions.Search_Get)
  }

  renderShop(item) {
    return <Touch key={item.id} onPress={e => this.Actions.ShopScreen({item})}>
      <Shop item={item}/>
    </Touch>
  }
  renderShops() {
    return <List renderRow={item => this.renderShop(item)} dataArray={this.props.Search.list} canLoadMore={true}/>
  }
  render() {
    return <Container>
      <Header back='back'/>
      <InfiniteScroll horizontal={false} distanceFromEnd={10} onLoadMoreAsync={this.loadmore.bind(this)}>
        <Categories/>
        {this.renderShops()}
      </InfiniteScroll>
      <Footer/>
    </Container>
  }
}
