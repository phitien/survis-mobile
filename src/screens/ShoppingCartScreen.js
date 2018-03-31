import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text, Icon} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {ShoppingCartScreen as style} from '../theme/styles/screens'

import {itemHelper} from '../utils'
import {Header, Footer} from '../containers'
import {Button, Image} from '../components'
import {Screen} from '../components'

const {col0W, col1W} = style

export class ShoppingCartScreen extends Screen {
  get items() {return this.props.ShoppingCartItem.ShoppingCartItems.list || []}
  get total() {return this.items.reduce((rs, item) => {
    const {qty, price} = itemHelper(item)
    rs += qty*price
    return rs
  }, 0)}

  async increase(item) {
    this.actions.ShoppingCartItem_Increase(item)
  }
  async decrease(item) {
    this.actions.ShoppingCartItem_Decrease(item)
  }
  async remove(item) {
    this.actions.ShoppingCartItem_Remove(item)
  }

  renderList() {
    return this.items.map((item, i) => {
      const {id, image, name, qty, price, priceS} = itemHelper(item)
      const shop = item.shop
      return <View horizontal start p key={id}>
        <View horizontal flex1>
          <View small-size-square mr><Image source={{uri: image}}/></View>
          <View full flex1>
            <View full><Text small>{shop.name}</Text></View>
            <View full smt smb><Text small bold>{name}</Text></View>
            <View full><Text theme small>{priceS}</Text></View>
          </View>
        </View>
        <View>
          <View horizontal end mb>
            <Text theme small>${(qty*price).toFixed(2)}</Text>
            <Icon theme ml onPress={this.remove.bind(this, item)} name='ios-trash'/>
          </View>
          <View horizontal end>
            <Touch onPress={this.decrease.bind(this, item)}>
              <View border center middle icon-size-square><Text small>-</Text></View>
            </Touch>
            <View border center middle icon-size-square><Text small>{qty}</Text></View>
            <Touch onPress={this.increase.bind(this, item)}>
              <View border center middle icon-size-square><Text small>+</Text></View>
            </Touch>
          </View>
        </View>
      </View>
    })
  }
  get back() {return true}
  get content() {
    return [
      <View heading key='heading'><Text bold big>Cart</Text></View>,
      this.renderList()
    ]
  }
  get footer() {
    return <View fullW horizontal pr pl middle-end>
      <View flex1>
        <Text grey italic>Total</Text>
        <Text theme big>${this.total.toFixed(2)}</Text>
      </View>
      <Button onPress={this.Actions.CheckoutScreen} disabled={!this.items.length || !this.total}>
        <Text>CHECK OUT</Text>
      </Button>
    </View>
  }
}
