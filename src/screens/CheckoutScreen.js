import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text, Icon, CheckBox, Toast} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import {ActionConst} from 'react-native-router-flux'

import {CheckoutScreen as style} from '../theme/styles/screens'

import {itemHelper, cardnum} from '../utils'
import {Header, Footer} from '../containers'
import {Button} from '../components'
import {Component as Screen} from '../components'

export class CheckoutScreen extends Screen {
  state = {agreed: false}
  get items() {return this.props.ShoppingCartItem.ShoppingCartItems.list || []}
  get total() {return this.items.reduce((rs, item) => {
    const {qty, price} = itemHelper(item)
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
      return this.setState({error: 'No payment information. Please update in your profile.'})
    this.setState({error: false})
  }
  onPressPaynow() {
    if (!this.logged) return this.Actions.LoginScreen()
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
          if (this.props.ShoppingCartItem.prizecheck) this.Actions.PrizesScreen()
          else this.Actions.HomeScreen()
        }
      })
    }
  }

  render() {
    const items = this.items
    const {usr_fname, usr_lname, usr_email} = this.props.User.User || {}
    const {ucc_num, bill_address} = this.props.PaymentInfo.PaymentInfo || {}
    return <Container>
      <Header back='back'/>
      <Content>
        <View heading>
          <Text bold big>Confirmation</Text>
        </View>
        <View>
          {this.renderError()}
          <View p white><Text bold>CART</Text></View>
          <View p grey>
            <View horizontal style={{...style.row, backgroundColor: style.oddBgColor}}>
              <Text small flex4>Total</Text>
              <Text small flex1 center></Text>
              <Text theme small flex2 right>${this.total.toFixed(2)}</Text>
            </View>
            {items.map((item, i) => {
              const {id, image, name, qty, price} = itemHelper(item)
              return <View key={id} horizontal pt pl pr style={{...style.row, backgroundColor: i % 2 == 0 ? style.evenBgColor : style.oddBgColor}}>
                <Text small flex4 style={{flex: 4}}>{name}</Text>
                <Text small flex1 center>{qty}</Text>
                <Text theme small flex2 right>${(qty*price).toFixed(2)}</Text>
              </View>
            })}
          </View>
        </View>
        <View>
          <View p white><Text bold>SHIPPING INFO</Text></View>
          <View p grey>
            <Text bold>{[usr_fname, usr_lname].join(' ')}</Text>
            <Text small>{usr_email}</Text>
          </View>
        </View>
        <View>
          <View p white><Text bold>PAYMENT INFO</Text></View>
          <View p grey>
            <View horizontal>
              <Icon theme name='card'/><Text bold>{cardnum(ucc_num)}</Text>
            </View>
            <Text small>{bill_address}</Text>
          </View>
        </View>
        <Touch onPress={e => this.setState({agreed: !this.state.agreed})}><View horizontal middle m>
          <CheckBox checked={this.state.agreed}/>
          <Text ml small>I agree with terms and conditions</Text>
        </View></Touch>
      </Content>
      <Footer>
        <View flex1></View>
        <View mr center middle>
          <Button small loading={this.props.ShoppingCartItem.loading} onPress={this.onPressPaynow.bind(this)} disabled={this.disabled}>
            <Text>PAY NOW</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
