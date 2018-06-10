import React, {Component} from 'react'
import {Container, View, Content, Text, DeckSwiper} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {ShopScreen as style} from '../theme/styles/screens'
import {Header, Footer, ShopSummary, ShopItem, Reviews} from '../containers'
import {Image} from '../components'
import {Screen} from '../components'

export class ShopScreen extends Screen {
  state = {showReview: false}
  get klass() {return 'ShopScreen'}
  get shop() {return this.props.Shop.Shop}
  get items() {return this.props.ShopItem.ShopItems.list || []}
  get loading() {return this.props.Shop.loading || this.props.ShopItem.loading}

  async componentDidMount() {
    this.actions.Shop_Shop({shopid: this.props.item.id})
    this.actions.ShopItem_ShopItems({shopid: this.props.item.id})
  }

  onPressSubmitReview({rating, comment}) {
    if (this.logged) {
      if (rating == 0 && !comment) {
         this.alert('Error', 'Please rate us or leave some comment.')
      }
      else {
        const showThankYouFn = e => this.alert('Message', 'Thank you for your review.', [{text: 'OK', onPress: () => {
          this.setState({showReview: false})
          this.actions.Shop_Shop({shopid: this.props.item.id})
        }}], {cancelable: false})
        const commentFn = e => {
          if (comment) this.actions.Shop_Review({shopid: this.shop.id, comment})
            .then(e => showThankYouFn())
          else showThankYouFn()
        }
        if (rating != 0) this.actions.Shop_Rate({id: this.shop.id, sourcetype: 'shop', rate: rating})
          .then(e => commentFn())
        else commentFn()
      }
    }
    else {
      this.actions.Screen_Save({id: 'ShopScreen', params: {item: this.props.item}})
      this.open('LoginScreen')
    }
  }

  renderShopItems() {
    if (this.state.showReview) return null
    const shop = this.shop
    return this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={e => this.open('ShopItemScreen', {item, shop})}>
      <ShopItem item={item} index={i}/>
    </Touch>)
  }
  renderImages() {
    if (this.state.showReview) return null
    const shop = this.shop || {}, {image, promotion_image} = shop
    const images = Array.from(new Set([promotion_image].concat(shop.images).filter(o => o)))
    return images.length ? <View big-size key='images'><Content horizontal big-size>
      {images.map((img,i) => <View big-size fullW key={`${i}-${img}`}><Image source={{uri: img}}/></View>)}
    </Content></View> : null
  }
  renderReviews() {
    if (!this.state.showReview) return null
    return <Reviews key='reviews' shopid={this.shop.id}
      ref={e => this.reviews = e}
      loading={this.props.Shop.loading}
      onPressBack={e => this.setState({showReview: false})}
      onPressSubmit={this.onPressSubmitReview.bind(this)}
    />
  }

  get back() {return true}
  get content() {
    const shop = this.shop
    return [
      // this.loading ? this.renderLoading() : null,
      <ShopSummary openPressReview={e => this.setState({showReview: !this.state.showReview})} item={shop} key='shop_summary'/>,
      this.renderReviews(),
      this.renderImages(),
      ...[].concat(this.renderShopItems())
    ]
  }
}
