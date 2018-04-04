import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text} from 'native-base'

import {Header, Footer, ShopSummary, ShopItem} from '../containers'
import {TouchableOpacity as Touch} from 'react-native'

import {PromotionScreen as style} from '../theme/styles/screens'

import {itemHelper, substr} from '../utils'
import {Image, Promotion, Reviews} from '../components'
import {Screen} from '../components'

export class PromotionScreen extends Screen {
  state = {showReview: false}
  async componentDidMount() {
    this.actions.Promotion_Promotion({prm_id: this.props.item.id})
  }

  get back() {return true}
  get content() {
    const item = this.props.Promotion.Promotion || {},
      items = [].concat(item.items).filter(o => o)
    return [
      // this.props.Promotion.loading ? this.renderLoading() : null,
      <ShopSummary item={item.shop_info} key='shop_summary' onPressReview={e => this.setState({showReview: !this.state.showReview})}/>,
      <Promotion item={item} key='promotion'/>,
      <View p full key='description'><Text small>{item.description}</Text></View>,
      ...items.map((sitem,i) => <Touch key={sitem.id} onPress={e => this.open('ShopItemScreen', {item: sitem, shop: item})}>
        <ShopItem item={sitem} index={i}/>
      </Touch>)
    ]
  }
}
