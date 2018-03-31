import React, {Component} from 'react'
import {Container, View, Text, List} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

import {PromotionsScreen as style} from '../theme/styles/screens'

import {Header, Footer, Categorys, Promotions} from '../containers'
import {Promotion} from '../components'
import {Screen} from '../components'

export class PromotionsScreen extends Screen {
  get items() {return this.props.Promotion.Promotions.list || []}
  async componentDidMount() {
    this.locationUpdate(this.actions.Promotion_Promotions)
  }
  loadmore() {
    if (!this.props.Promotion.loading) {
      this.actions.Promotion_Loadmore()
      .then(e => this.locationUpdate(this.actions.Promotion_Promotions))
    }
  }

  renderPromotion(item) {
    return <Touch key={item.id} onPress={e => this.Actions.PromotionScreen({item})}>
      <Promotion item={item}/>
    </Touch>
  }
  renderPromotions() {
    return <List renderRow={item => this.renderPromotion(item)} dataArray={this.items} canLoadMore={true}/>
  }
  renderContent() {
    return <InfiniteScroll horizontal={false} distanceFromEnd={10} onLoadMoreAsync={this.loadmore.bind(this)}>
      <Text heading>Promotions</Text>
      {this.renderPromotions()}
    </InfiniteScroll>
  }
}
