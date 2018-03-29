import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text} from 'native-base'

import {Header, Footer, ShopSummary, ShopItem} from '../containers'
import {ScrollView, TouchableOpacity as Touch} from 'react-native'

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
    return <ScrollView containerStyle={style.container}>
      <Promotion item={item}/>
      <ShopSummary item={item.shop_info}/>
      <View p><Text small>{item.description}</Text></View>
      {items.map(sitem => <Touch key={sitem.id} onPress={e => this.Actions.ShopItemScreen({item: sitem, shop: item})}>
        <ShopItem item={sitem}/>
      </Touch>)}
    </ScrollView>
  }
  render() {
    return <Container>
      <Header back='back'/>
      <Content>
        {this.props.Promotion.loading ? this.renderLoading() : this.renderContent()}
      </Content>
      <Footer/>
    </Container>
  }
}
