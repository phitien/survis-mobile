import React, {Component} from 'react'
import {Container, View, Content, Button, Text} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {Header, Footer, ShopSummary, Review} from '../containers'

import {ShopItemScreen as style} from '../theme/styles/screens'

import {Image, Rating} from '../components'
import {itemHelper, substr} from '../utils'
import {Screen} from '../components'

export class ShopItemScreen extends Screen {
  get itemid() {return this.props.item.id}
  get item() {return this.props.ShopItem.ShopItem || this.props.item || {}}
  get shop() {return this.props.shop || {}}
  get reviews() {
    const reviews = this.props.Review.Reviews.list || []
    return this.state.seeall ? reviews : reviews.slice(0, 3)
  }

  state = {seeall: false}

  async componentWillMount() {
    const itemid = this.itemid
    this.actions.ShopItem_ShopItem({itemid})
    this.actions.Review_Reviews({itemid})
  }

  async addToCart() {
    this.actions.ShoppingCartItem_Add({...this.item, shop: this.props.shop})
    this.Actions.pop()
  }

  onPressSeeAll() {
    this.setState({seeall: !this.state.seeall})
  }

  renderImages() {
    const item = this.item
    const {image, detailimage} = item
    const images = Array.from(new Set([image, detailimage].concat(item.images).filter(o => o)))
    return images.length ? <View big-size key='images'><Content horizontal big-size>
      {images.map((img,i) => <View big-size fullW key={i}><Image source={{uri: img}}/></View>)}
    </Content></View> : null
  }
  get back() {return true}
  get content() {
    const {item, shop} = this
    const {
      id, image, name, priceS, totalrate, totalreviews, description
    } = itemHelper(item)
    return [
      // <ShopSummary item={shop} key='shop_summary'/>,
      <View full sp key='statistic'>
        <View horizontal full>
          <View mb mr small-size-square><Image source={{uri: image}}/></View>
          <View flex1>
            <View full><Text right bold>{name}</Text></View>
            <View full><Text right bold big theme>{priceS}</Text></View>
          </View>
        </View>
        <View horizontal flex1 space-between>
          <Rating rating={totalrate} itemid={id}/>
          <Text theme small>({totalreviews}) Reviews</Text>
        </View>
      </View>,
      this.renderImages(),
      <View full sp key='description'><Text small>{description}</Text></View>,
      <View full key='reviews'>
        <View horizontal heading space-between>
          <Text>Reviews</Text>
          <Touch onPress={this.onPressSeeAll.bind(this)}><Text theme>SEE ALL</Text></Touch>
        </View>
        <View full sp>
          {this.reviews.map(ritem => <Review key={ritem.id} item={ritem}/>)}
        </View>
      </View>
    ]
  }
  get footer() {
    return <View fullW horizontal pr pl middle-end>
      <Text flex1 theme big>{priceS}</Text>
      <Button onPress={this.addToCart.bind(this)}>
        <Text>ADD TO CART</Text>
      </Button>
    </View>
  }
}
