import React, {Component} from 'react'
import {Container, View, Text, List} from 'native-base'
import {TouchableOpacity} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

import {PromotionsScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer, Categories, Promotions} from '../containers'
import {Component as Screen, Promotion} from '../components'

export class PromotionsScreen extends Screen {
  async componentDidMount() {
    this.locationUpdate(this.actions.Promotions_Get)
  }
  loadmore() {
    if (!this.props.Promotions.loading) this.actions.Promotions_Loadmore()
    this.locationUpdate(this.actions.Promotions_Get)
  }

  renderPromotion(item) {
    return <TouchableOpacity key={item.id} onPress={e => this.Actions.PromotionScreen({item})}>
      <Promotion item={item}/>
    </TouchableOpacity>
  }
  renderPromotions() {
    return <List renderRow={item => this.renderPromotion(item)} dataArray={this.props.Promotions.list} canLoadMore={true}/>
  }
  render() {
    return <Container>
      <Header/>
      <InfiniteScroll horizontal={false} distanceFromEnd={10} onLoadMoreAsync={this.loadmore.bind(this)}>
        <Text style={style.heading}>Promotions</Text>
        {this.renderPromotions()}
      </InfiniteScroll>
      <Footer/>
    </Container>
  }
}
