import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text, Icon, CheckBox} from 'native-base'

import {CheckoutConfirmScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer} from '../containers'
import {Button} from '../components'
import {itemHelper, cardnum} from '../utils'
import {Component as Screen} from '../components'

export class CheckoutConfirmScreen extends Screen {
  get items() {return this.props.ShoppingCart.list}
  get checked() {return this.props.ShoppingCart.checked}
  get loading() {return this.props.ShoppingCart.loading}

  async componentDidMount() {
    if (this.checked) {
      this.actions.ShoppingCart_Clear()
      this.Actions.replace('HomeScreen', {message: 'Your order has been placed successfully.'})
    }
  }

  placeOrder() {
    if (!this.logged) return this.Actions.LoginScreen()
    this.actions.ShoppingCart_Checkout({items: this.items.map(item => ({
      itemid: item.id,
      shopid: item.shop_id,
      qty: item.qty
    }))})
  }

  render() {
    if (this.loading) return this.renderLoading()
    const evenColor = 'rgb(247, 247,247)', oddColor = 'white'
    let items = this.items, total = 0
    return (<Container>
      <Header back='back'/>
      <Content>
        <View horizotal grey p-16>
          <Text bold fs16>Confirmation</Text>
        </View>
        <View p-25 m-10 grey>
          <Text bold fs16>CART</Text>
          {items.map((item, index) => {total += item.price * item.qty
            return (<View horizontal center m-t-5 style={{backgroundColor: index % 2 == 0 ? evenColor : oddColor}}>
              <Text fs12 style={{flex: 4}}>{item.name}</Text>
              <Text fs12 style={{flex: 1}}>{item.qty}</Text>
              <Text fs12 style={{flex: 2``}}>${(item.price * item.qty).toFixed(2)}</Text>
            </View>)
          })}
        </View>
        <View p-25 m-10 grey>
          <Text bold fs16>SHIPPING INFO</Text>
          <Text fs12>{this.User.fname}</Text>
          <Text fs12>{this.User.email}</Text>
        </View>
        <View p-25 m-10 grey>
          <Text bold fs16>PAYMENT INFO</Text>
          <View p-25 horizontal space-between>
            <Icon name='card'/>
            <Text bold fs14>{cardnum(this.PaymentInfo.num)}</Text>
          </View>
        </View>
        <View horizontal>
          <CheckBox checked/>
          <Text></Text>
          <Text fs12>I agree with terms and conditions</Text>
        </View>
      </Content>
      <Footer>
        <View m-r-10 center center-h>
          <Button small text='PAY NOW' loading={this.loading}
            onPress={this.placeOrder.bind(this)}/>
        </View>
      </Footer>
    </Container>)
  }
}
