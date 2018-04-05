import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text, DeckSwiper} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {ShopScreen as style} from '../theme/styles/screens'

import {Header, Footer, ShopSummary, ShopItem} from '../containers'
import {Image} from '../components'
import {itemHelper, substr} from '../utils'
import {Screen} from '../components'

export class ShopScreen extends Screen {
  state = {showReview: false}
  get items() {return this.props.ShopItem.ShopItems.list || []}
  get loading() {return this.props.Shop.loading || this.props.ShopItem.loading}

  async componentDidMount() {
    const shopid = this.props.item.id
    this.actions.Shop_Shop({shopid})
    this.actions.ShopItem_ShopItems({shopid})
  }

  renderShopItems() {
    const shop = this.props.Shop.Shop
    return this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={e => this.open('ShopItemScreen', {item, shop})}>
      <ShopItem item={item} index={i}/>
    </Touch>)
  }
  renderImages() {
    const shop = this.props.Shop.Shop || {}, {image, promotion_image} = shop
    const images = Array.from(new Set([promotion_image].concat(shop.images).filter(o => o)))
    return images.length ? <View big-size key='images'><Content horizontal big-size>
      {images.map((img,i) => <View big-size fullW key={`${i}-${img}`}><Image source={{uri: img}}/></View>)}
    </Content></View> : null
  }

  get back() {return true}
  get content() {
    const item = this.props.Shop.Shop
    return [
      // this.loading ? this.renderLoading() : null,
      <ShopSummary openPressReview={e => this.setState({showReview: true})} item={item} key='shop_summary'/>,
      ...[].concat(this.renderImages()),
      ...[].concat(this.renderShopItems())
    ]
  }
}
