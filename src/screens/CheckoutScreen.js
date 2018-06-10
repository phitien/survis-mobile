import React, {Component} from 'react'
import {Container, View, Content, Text, Icon, CheckBox, Toast} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import {ActionConst} from 'react-native-router-flux'

import {Header, Footer} from '../containers'
import {Button} from '../components'
import {Screen} from '../components'

export class CheckoutScreen extends Screen {
  state = {agreed: this.props.agreed || this.props.navigation.state.params.agreed}
  get klass() {return 'CheckoutScreen'}
  get items() {return this.props.ShoppingCartItem.ShoppingCartItems.list || []}
  get total() {return this.items.reduce((rs, item) => {
    const {qty, price} = this.utils.itemHelper(item)
    rs += qty*price
    return rs
  }, 0)}
  get disabled() {
    const {PaymentInfo} = this.props.PaymentInfo || {}
    const {ucc_num, ucc_name, ucc_expire, ucc_cvc} = PaymentInfo
    return !this.items.length || !this.total || !this.state.agreed
      || !ucc_num || !ucc_name || !ucc_expire || !ucc_cvc
  }

  async componentDidMount() {
    this.validate()
  }

  validate() {
    const {PaymentInfo} = this.props.PaymentInfo || {}
    const {ucc_num, ucc_name, ucc_expire, ucc_cvc} = PaymentInfo
    if (!ucc_num || !ucc_name || !ucc_expire || !ucc_cvc)
      return this.setState({
        missing_payment_info: true,
        error: 'No payment information. Please update in your profile.'
      })
    this.setState({
      error: false,
      missing_payment_info: false,
    })
  }
  onPressPaynow() {
    if (!this.logged) {
      this.actions.Screen_Save({id: 'CheckoutScreen', params: this.state})
      return this.open('LoginScreen')
    }
    if (!this.props.ShoppingCartItem.loading) {
      const items = this.items
      this.actions.ShoppingCartItem_Checkout({items: items.map(item => ({
        itemid: item.id,
        shopid: item.shop_id,
        qty: item.qty
      }))})
      .then(res => {
        this.setState({error: this.props.ShoppingCartItem.error})
        if (!this.state.error) {
          if (this.props.ShoppingCartItem.prizecheck) this.open('PrizesScreen')
          else this.open('HomeScreen')
        }
      })
    }
  }

  get back() {return true}
  get footer() {
    return <View fullW horizontal pr pl middle-end>
      {this.state.missing_payment_info ? <Button mr onPress={e => this.open('UserScreen')}><Text>Profile</Text></Button> : null}
      <Button loading={this.props.ShoppingCartItem.loading} onPress={this.onPressPaynow.bind(this)} disabled={this.disabled}>
        <Text>PAY NOW</Text>
      </Button>
    </View>
  }
  get content() {
    const items = this.items
    const {usr_fname, usr_lname, usr_email} = this.props.User.User || {}
    const {ucc_num, bill_address} = this.props.PaymentInfo.PaymentInfo || {}
    return [
    <View heading key='heading'>
      <Text bold big>Confirmation</Text>
    </View>,
    <View key='main'>
      {this.renderError()}
      <View p white><Text bold>CART</Text></View>
      <View p grey>
        <View horizontal p white>
          <Text small flex4>Total</Text>
          <Text small flex1 center></Text>
          <Text theme small flex2 right>${this.total.toFixed(2)}</Text>
        </View>
        {items.map((item, i) => {
          const {id, image, name, qty, price} = this.utils.itemHelper(item)
          return <View key={id} horizontal p {...{grey:i%2!=0}}>
            <Text small flex4>{name}</Text>
            <Text small flex1 center>{qty}</Text>
            <Text theme small flex2 right>${(qty*price).toFixed(2)}</Text>
          </View>
        })}
      </View>
    </View>,
    <View key='shipping_address'>
      <View p white><Text bold>SHIPPING INFO</Text></View>
      <View p grey>
        <Text bold>{[usr_fname, usr_lname].join(' ')}</Text>
        <Text small>{usr_email}</Text>
      </View>
    </View>,
    <View key='payment_infor'>
      <View p white><Text bold>PAYMENT INFO</Text></View>
      <View p grey>
        <View horizontal>
          <Icon theme name='card'/><Text bold>{this.utils.cardnum(ucc_num)}</Text>
        </View>
        <Text small>{bill_address}</Text>
      </View>
    </View>,
    <Touch key='agreement' onPress={e => this.setState({agreed: !this.state.agreed})}><View horizontal middle m>
      <CheckBox checked={this.state.agreed}/>
      <Text ml small>I agree with terms and conditions</Text>
    </View></Touch>
  ]}
}
