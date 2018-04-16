import React, {Component} from 'react'
import {Container, View, Content, Button, Text} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import {Alert} from 'react-native'

import {Header, Footer, ShopSummary, Reviews} from '../containers'

import {ShopItemScreen as style} from '../theme/styles/screens'

import {Image, Rating} from '../components'
import {itemHelper, substr} from '../utils'
import {Screen} from '../components'

export class ShopItemScreen extends Screen {
  state = {showReview: false}

  get itemid() {return this.props.item.id}
  get item() {return this.props.ShopItem.ShopItem || this.props.item || {}}
  get shop() {return this.props.shop || {}}

  async componentDidMount() {
    this.actions.ShopItem_ShopItem({itemid: this.itemid})
    this.actions.Review_Reviews({itemid: this.itemid})
  }

  async addToCart() {
    this.actions.ShoppingCartItem_Add({...this.item, shop: this.props.shop})
    this.Actions.pop()
  }

  onPressSubmitReview({rating, comment}) {
    if (this.logged) {
      if (rating == 0 && !comment) {
         Alert.alert('Error', 'Please rate us or leave some comment.')
      }
      else {
        const showThankYouFn = e => Alert.alert('Message', 'Thank you for your review.', [{text: 'OK', onPress: () => {
          this.setState({showReview: false})
          this.actions.ShopItem_ShopItem({itemid: this.itemid})
        }}], {cancelable: false})
        const commentFn = e => {
          if (comment) this.actions.ShopItem_Review({itemid: this.shop.id, comment})
            .then(e => showThankYouFn())
          else showThankYouFn()
        }
        if (rating != 0) this.actions.ShopItem_Rate({id: this.shop.id, rate: rating})
          .then(e => commentFn())
        else commentFn()
      }
    }
    else {
      this.actions.Screen_Save({id: 'ShopItemScreen', params: {item: this.props.item}})
      this.open('LoginScreen')
    }
  }

  renderReviews() {
    if (!this.state.showReview) return null
    return <Reviews key='reviews' itemid={this.itemid}
      loading={this.props.ShopItem.loading}
      onPressBack={e => this.setState({showReview: false})}
      onPressSubmit={this.onPressSubmitReview.bind(this)}
    />
  }
  renderImages() {
    if (this.state.showReview) return null
    const item = this.item
    const {image, detailimage} = item
    const images = Array.from(new Set([image, detailimage].concat(item.images).filter(o => o)))
    return images.length ? <View big-size key='images'><Content horizontal big-size>
      {images.map((img,i) => <View big-size fullW key={i}><Image source={{uri: img}}/></View>)}
    </Content></View> : null
  }
  renderSameShopItems() {
    return null
  }
  renderDescription() {
    if (this.state.showReview) return null
    const {item, shop} = this
    const {
      description
    } = itemHelper(item)
    return <View full sp key='description'><Text small>{description}</Text></View>
  }

  get back() {return true}
  get content() {
    const {item, shop} = this
    const {
      id, image, name, priceS, totalrate, totalreviews, description
    } = itemHelper(item)
    return [
      // <ShopSummary item={shop} key='shop_summary'/>,
      <View full grey sp key='statistic'>
        <View horizontal full>
          <View mb mr small-size-square><Image source={{uri: image}}/></View>
          <View flex1>
            <View full><Text right bold>{name}</Text></View>
            <View full><Text right bold big theme>{priceS}</Text></View>
          </View>
        </View>
        <View horizontal flex1 space-between>
          <Rating rating={totalrate} itemid={id}/>
          <Text theme small onPress={e => {
            this.setState({showReview: !this.state.showReview})
          }}>{`(${totalreviews}) Reviews`}</Text>
        </View>
      </View>,
      this.renderReviews(),
      this.renderImages(),
      this.renderDescription(),
      this.renderSameShopItems()
    ]
  }
  get footer() {
    const {item, shop} = this
    const {
      priceS
    } = itemHelper(item)
    return <View fullW horizontal pr pl middle-end>
      <Text flex1 theme big>{priceS}</Text>
      <Button onPress={this.addToCart.bind(this)}>
        <Text>ADD TO CART</Text>
      </Button>
    </View>
  }
}
