import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text} from 'native-base'

import {Header, Footer, ShopSummary, ShopItem} from '../containers'
import {ScrollView, TouchableOpacity} from 'react-native'

import {PromotionScreen as style} from '../../survis-themes/styles/screens'

import {itemHelper, substr} from '../utils'
import {Image, Promotion} from '../components'
import {Component as Screen} from '../components'

export class PromotionScreen extends Screen {
  componentDidMount() {
    this.actions.Promotions_Detail({prm_id: this.props.item.id})
  }

  renderContent() {
    let item = this.props.Promotions.detail || {},
      items = [].concat(item.items).filter(o => o)
    return <ScrollView containerStyle={style.container}>
      <Promotion item={item}/>
      <ShopSummary item={item.shop_info}/>
      <View style={style.description}>
        <Text fs12>{item.description}</Text>
      </View>
      {items.map(sitem => <TouchableOpacity key={sitem.id} onPress={e => this.Actions.ShopItemScreen({item: sitem, shop: item})}>
        <ShopItem item={sitem}/>
      </TouchableOpacity>)}
    </ScrollView>
  }
  render() {
    return <Container>
      <Header back='back'/>
      <Content>
        {this.props.Promotions.loading ? this.renderLoading() : this.renderContent()}
      </Content>
      <Footer/>
    </Container>
  }
}
