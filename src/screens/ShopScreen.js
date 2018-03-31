import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text, DeckSwiper} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {ShopScreen as style} from '../theme/styles/screens'

import {Header, Footer, ShopSummary, ShopItem, Review} from '../containers'
import {Image} from '../components'
import {itemHelper, substr} from '../utils'
import {Screen} from '../components'

export class ShopScreen extends Screen {
  state = {showReview: false}
  get items() {return this.props.ShopItem.ShopItems.list || []}
  get loading() {return this.props.Shop.loading || this.props.ShopItem.loading || this.props.Review.loading}

  componentWillMount() {
    const shopid = this.props.item.id
    this.actions.Shop_Shop({shopid})
    this.actions.ShopItem_ShopItems({shopid})
    this.actions.Review_Reviews({shopid})
  }

  renderReviews() {
    return [
      <View horizontal flex1 heading p space-between key='reviews'>
        <Text bold>Reviews</Text>
        <Text theme onPress={e => this.setState({showReview: false})}>Back</Text>
      </View>
    ]
    .concat(this.props.Review.Reviews.list.map((item,i) => <Touch key={item.id}>
      <Review item={item} index={i}/>
    </Touch>))
  }
  renderShopItems() {
    const shop = this.props.Shop.Shop
    return this.items.map((item,i) => <Touch key={item.id} onPress={e => this.Actions.ShopItemScreen({item, shop})}>
      <ShopItem item={item} index={i}/>
    </Touch>)
  }
  renderImages() {
    const shop = this.props.Shop.Shop || {}, {image, promotion_image} = shop
    const images = Array.from(new Set([promotion_image].concat(shop.images).filter(o => o)))
    return images.length ? <View big-size key='images'><Content horizontal big-size>
      {images.map((img,i) => <View big-size fullW key={i}><Image source={{uri: img}}/></View>)}
    </Content></View> : null
  }

  get back() {return true}
  get content() {
    const item = this.props.Shop.Shop
    return [
      this.loading ? this.renderLoading() : null,
      <ShopSummary openReview={e => this.setState({showReview: true})} item={item}/>,
      ...[].concat(this.renderImages()),
      ...[].contact(this.state.showReview ? this.renderReviews() : this.renderShopItems())
    ]
  }
}
