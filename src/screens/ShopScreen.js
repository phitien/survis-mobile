import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text} from 'native-base'
import {ScrollView, TouchableOpacity} from 'react-native'

import {ShopScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer, ShopSummary, ShopItem, Review} from '../containers'
import {Image} from '../components'
import {itemHelper, substr} from '../utils'
import {Component as Screen} from '../components'

export class ShopScreen extends Screen {
  state = {
    showReview: false
  }
  componentWillMount() {
    this.actions.Shops_Detail({shopid: this.props.item.id})
    this.actions.Shops_Items({shopid: this.props.item.id})
    this.actions.Reviews_Search({shopid: this.props.item.id})
    this.actions.Reviews_Get()
  }

  renderReviews() {
    return [<View horizontal style={style.review_header}>
      <Text bold>Reviews</Text>
      <Text onPress={e => this.setState({showReview: false})} style={style.back}>Back</Text>
    </View>].concat(this.props.Reviews.list.map(item => <TouchableOpacity key={item.id}>
      <Review item={item}/>
    </TouchableOpacity>))
  }
  renderShopItems() {
    const item = this.props.Shops.detail
    return <View style={style.items}>
      <Image style={style.image} source={{uri: item.image}}/>
      {item.items.map((sitem,i) => <TouchableOpacity key={sitem.id} onPress={e => this.Actions.ShopItemScreen({item: sitem, shop: item})}>
        <ShopItem item={sitem} odd={i%2}/>
      </TouchableOpacity>)}
    </View>
  }
  renderContent() {
    const item = this.props.Shops.detail
    return <ScrollView containerStyle={style.container}>
      <ShopSummary openReview={e => this.setState({showReview: true})} item={item}/>
      {this.state.showReview ? this.renderReviews() : this.renderShopItems()}
    </ScrollView>
  }
  render() {
    return <Container>
      <Header back='back'/>
      <Content>
        {this.props.Shops.loading ? this.renderLoading() : this.renderContent()}
      </Content>
      <Footer/>
    </Container>
  }
}
