import React, {Component} from 'react'
import {Container, View, Content, Button, Text} from 'native-base'
import {ScrollView} from 'react-native'

import {Header, Footer, ShopSummary, Review} from '../containers'

import {ShopItemScreen as style} from '../theme/styles/screens'

import {Image, Rating} from '../components'
import {itemHelper, substr} from '../utils'
import {Component as Screen} from '../components'

export class ShopItemScreen extends Screen {
  async componentWillMount() {
    this.actions.ShopsItem_ShopsItem({itemid: this.props.item.id})
    this.actions.Review_Reset()
    this.actions.Review_Search({itemid: this.props.item.id})
    this.actions.Review_Reviews()
  }

  async addToCart() {
    this.actions.ShoppingCartItem_Add({...this.props.item, shop: this.props.shop})
    this.Actions.pop()
  }

  render() {
    const item = this.props.ShopItem.ShopItem
    const shop = this.props.shop
    const {
      id, image, name, priceS, totalrate, totalreviews, description
    } = itemHelper(item)
    return <Container>
      <Header back='back'/>
      <Content>
        <ScrollView>
          <View style={style.container}>
            <View horizontal>
              <View mb mr style={style.image_container}><Image style={style.image} source={{uri: image}}/></View>
              <View flex1 style={style.info}>
                <Text bold>{name}</Text>
                <Text bold big theme>{priceS}</Text>
              </View>
            </View>
            <View horizontal flex1 space-between style={style.statistic}>
              <Rating rating={totalrate} itemid={id}/>
              <Text theme small>({totalreviews}) Reviews</Text>
            </View>
          </View>
          <ShopSummary item={shop}/>
          <View p style={style.voucher}>
            <Text bold big bmb>Voucher details</Text>
            <Text small>{description}</Text>
          </View>
          <View style={style.reviews}>
            <View horizontal space-between>
              <Text bold big bmb>Reviews</Text>
              <Text theme>SEE ALL</Text>
              {this.props.Review.Reviews.list.map(ritem => <Review key={ritem.id} item={ritem}/>)}
            </View>
          </View>
        </ScrollView>
      </Content>
      <Footer>
        <View ml middle>
          <Text theme big>{priceS}</Text>
        </View>
        <View mr center middle>
          <Button small onPress={this.addToCart.bind(this)}>
            <Text>ADD TO CART</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
