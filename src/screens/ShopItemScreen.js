import React, {Component} from 'react'
import {Container, View, Content, Button, Text} from 'native-base'
import {ScrollView} from 'react-native'

import {Header, Footer, ShopSummary, Review} from '../containers'

import {ShopItemScreen as style} from '../../survis-themes/styles/screens'

import {Image, Rating} from '../components'
import {itemHelper, substr} from '../utils'
import {Component as Screen} from '../components'

export class ShopItemScreen extends Screen {
  async componentWillMount() {
    this.actions.Shops_ItemDetail({itemid: this.props.item.id})
    this.actions.Reviews_Reset()
    this.actions.Reviews_Get({itemid: this.props.item.id})
  }
  addToCart() {
    this.actions.ShoppingCart_Add({...this.props.item, shop: this.props.shop})
    this.Actions.pop()
  }

  render() {
    const item = this.props.Shops.itemdetail
    const shop = this.props.shop
    const {
      id, image, name, price, totalrate, totalreviews, description
    } = itemHelper(item)
    return <Container>
      <Header back='back'/>
      <Content>
        <ScrollView>
          <View style={style.container}>
            <View horizontal>
              <Image resizeMode='stretch' style={style.image} source={{uri: image}}/>
              <View style={style.info}>
                <Text bold>{name}</Text>
                <Text bold fs16 theme>{price}</Text>
              </View>
            </View>
            <View horizontal style={style.statistic}>
              <Rating rating={totalrate} itemid={id}/>
              <Text theme fs12>({totalreviews}) Reviews</Text>
            </View>
          </View>
          <ShopSummary item={shop}/>
          <View style={style.voucher}>
            <Text style={style.heading}>Voucher details</Text>
            <Text style={style.description}>{description}</Text>
          </View>
          <View style={style.reviews}>
            <View horizontal space-between>
              <Text style={style.heading}>Reviews</Text>
              <Text theme>SEE ALL</Text>
              {this.props.Reviews.list.map(ritem => <Review key={ritem.id} item={ritem}/>)}
            </View>
          </View>
        </ScrollView>
      </Content>
      <Footer>
        <View m-l-10 center-h>
          <Text theme fs18>{price}</Text>
        </View>
        <View m-r-10 center center-h>
          <Button small onPress={this.addToCart.bind(this)}>
            <Text>ADD TO CART</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
