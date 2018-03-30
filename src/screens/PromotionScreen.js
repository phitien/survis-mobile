import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text} from 'native-base'

import {Header, Footer, ShopSummary, ShopItem} from '../containers'
import {TouchableOpacity as Touch} from 'react-native'

import {PromotionScreen as style} from '../theme/styles/screens'

import {itemHelper, substr} from '../utils'
import {Image, Promotion} from '../components'
import {Component as Screen} from '../components'

export class PromotionScreen extends Screen {
  componentDidMount() {
    this.actions.Promotion_Promotion({prm_id: this.props.item.id})
  }

  renderContent() {
    const item = this.props.Promotion.Promotion || {},
      items = [].concat(item.items).filter(o => o)
    return <Content>
      <ShopSummary item={item.shop_info}/>
      <Promotion item={item}/>
      <View p full><Text small>{item.description}</Text></View>
      {items.map((sitem,i) => <Touch key={sitem.id} onPress={e => this.Actions.ShopItemScreen({item: sitem, shop: item})}>
        <ShopItem item={sitem} index={i}/>
      </Touch>)}
    </Content>
  }
  render() {
    return <Container>
      <Header back='back'/>
      <Content>
        {this.props.Promotion.loading ? this.renderLoading() : null}
        {this.renderContent()}
      </Content>
      <Footer/>
    </Container>
  }
}
