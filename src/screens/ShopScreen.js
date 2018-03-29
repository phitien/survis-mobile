import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import {ScrollView} from 'react-native'

import {ShopScreen as style} from '../theme/styles/screens'

import {Header, Footer, ShopSummary, ShopItem, Review} from '../containers'
import {Image} from '../components'
import {itemHelper, substr} from '../utils'
import {Component as Screen} from '../components'

export class ShopScreen extends Screen {
  state = {showReview: false}
  get items() {return this.props.ShopItem.ShopItems.list || []}
  get loading() {return this.props.Shop.loading || this.props.ShopItem.loading || this.props.Review.loading}

  componentWillMount() {
    const shopid = this.props.item.id
    this.actions.Shop_Shop({shopid})
    this.actions.ShopItem_Reset()
    this.actions.ShopItem_Search({shopid})
    this.actions.ShopItem_ShopItems()
    this.actions.Review_Reset()
    this.actions.Review_Search({shopid})
    this.actions.Review_Reviews()
  }

  renderReviews() {
    return [
      <View horizontal flex1 heading p space-between>
        <Text bold>Reviews</Text>
        <Text theme onPress={e => this.setState({showReview: false})}>Back</Text>
      </View>
    ]
    .concat(this.props.Review.Reviews.list.map((item,i) => <Touch key={item.id}>
      <Review item={item} index={i}/>
    </Touch>))
  }
  renderShopItems() {
    const item = this.props.Shop.Shop
    const items = this.items
    return <View>
      <View style={style.image_container}><Image style={style.image} source={{uri: item.image}}/></View>
      {items.map((sitem,i) => <Touch key={sitem.id} onPress={e => this.Actions.ShopItemScreen({item: sitem, shop: item})}>
        <ShopItem item={sitem} index={i} odd={i%2}/>
      </Touch>)}
    </View>
  }
  renderContent() {
    const item = this.props.Shop.Shop
    return <ScrollView containerStyle={style.container}>
      <ShopSummary openReview={e => this.setState({showReview: true})} item={item}/>
      {this.state.showReview ? this.renderReviews() : this.renderShopItems()}
    </ScrollView>
  }
  render() {
    return <Container>
      <Header back='back'/>
      <Content>
        {this.loading ? this.renderLoading() : this.renderContent()}
      </Content>
      <Footer/>
    </Container>
  }
}
