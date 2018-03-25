import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text, Icon, CheckBox, Toast} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import {ActionConst} from 'react-native-router-flux'

import {CheckoutScreen as style} from '../../survis-themes/styles/screens'

import {itemHelper, cardnum, setShoppingCart} from '../utils'
import {Header, Footer} from '../containers'
import {Button} from '../components'
import {Component as Screen} from '../components'

export class CheckoutScreen extends Screen {
  state = {agreed: false}
  get total() {return this.props.ShoppingCart.list.reduce((rs, item) => {
    const {qty, price} = itemHelper(item)
    rs += qty*price
    return rs
  }, 0)}
  get disabled() {
    return !this.props.ShoppingCart.list.length || !this.total || !this.state.agreed
      || !this.props.PaymentInfo.ucc_num || !this.props.PaymentInfo.ucc_name
      || !this.props.PaymentInfo.ucc_expire || !this.props.PaymentInfo.ucc_cvc
  }

  async componentDidMount() {
    this.validate()
  }

  validate() {
    if (!this.props.PaymentInfo.ucc_num || !this.props.PaymentInfo.ucc_name
      || !this.props.PaymentInfo.ucc_expire || !this.props.PaymentInfo.ucc_cvc)
      return this.setState({error: 'No payment information. Please update in your profile.'})
    this.setState({error: false})
  }
  onPressPaynow() {
    if (!this.logged) return this.Actions.LoginScreen()
    if (!this.props.Prizes.loading) this.actions.ShoppingCart_Place({items: this.props.ShoppingCart.list.map(item => ({
      itemid: item.id,
      shopid: item.shop_id,
      qty: item.qty
    }))})
    .then(res => {
      this.setState({error: this.props.ShoppingCart.error})
      if (!this.state.error) {
        if (this.props.ShoppingCart.prizecheck) this.Actions.PrizesScreen()
        else this.Actions.HomeScreen()
        this.actions.ShoppingCart_Clear()
        setShoppingCart(this.props.ShoppingCart)
      }
    })
  }

  render() {
    return <Container>
      <Header back='back'/>
      <Content>
        <View horizotal style={style.heading}>
          <Text bold fs16>Confirmation</Text>
        </View>
        <View>
          {this.renderError()}
          <View style={style.label}><Text bold fs14>CART</Text></View>
          <View style={style.content}>
            <View horizontal style={{...style.row, backgroundColor: style.oddBgColor}}>
              <Text fs12 style={{flex: 4}}>Total</Text>
              <Text fs12 style={{flex: 1, textAlign: 'center'}}></Text>
              <Text theme fs12 style={{flex: 2, textAlign: 'right'}}>${this.total.toFixed(2)}</Text>
            </View>
            {this.props.ShoppingCart.list.map((item, i) => {
              const {id, image, name, qty, price} = itemHelper(item)
              return <View key={id} horizontal style={{...style.row, backgroundColor: i % 2 == 0 ? style.evenBgColor : style.oddBgColor}}>
                <Text fs12 style={{flex: 4}}>{name}</Text>
                <Text fs12 style={{flex: 1, textAlign: 'center'}}>{qty}</Text>
                <Text theme fs12 style={{flex: 2, textAlign: 'right'}}>${(qty*price).toFixed(2)}</Text>
              </View>
            })}
          </View>
        </View>
        <View>
          <View style={style.label}><Text bold fs14>SHIPPING INFO</Text></View>
          <View style={style.content}>
            <Text bold fs14>{[this.props.User.usr_fname, this.props.User.usr_lname].join(' ')}</Text>
            <Text fs12>{this.props.User.usr_email}</Text>
          </View>
        </View>
        <View>
          <View style={style.label}><Text bold fs14>PAYMENT INFO</Text></View>
          <View style={style.content}>
            <View horizontal>
              <Icon name='card'/><Text bold fs14>{cardnum(this.props.PaymentInfo.ucc_num)}</Text>
            </View>
            <View>
              <Text fs12>{this.props.PaymentInfo.bill_address}</Text>
            </View>
          </View>
        </View>
        <View style={style.agreement}>
          <Touch onPress={e => this.setState({agreed: !this.state.agreed})}>
            <View horizontal>
              <CheckBox checked={this.state.agreed}/><Text bold fs12 style={{marginLeft: 24}}>I agree with terms and conditions</Text>
            </View>
          </Touch>
        </View>
      </Content>
      <Footer>
        <View flex1></View>
        <View m-r-10 center center-h>
          <Button small loading={this.props.ShoppingCart.loading} onPress={this.onPressPaynow.bind(this)} disabled={this.disabled}>
            <Text>PAY NOW</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
