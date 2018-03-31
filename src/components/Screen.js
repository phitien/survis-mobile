import React from 'react'
import {Container, Content} from 'native-base'
import DeviceInfo from 'react-native-device-info'

import {getUser, getPaymentInfo, getShoppingCartItems, requestHeader} from '../utils'
import {Header, Footer} from '../containers'
import {Component} from './Component'

export class Screen extends Component {
  get header() {return this.props.header}
  get content() {return this.props.content}
  get footer() {return this.props.footer}
  get back() {return false}

  async loadDevice() {
    const device_model = DeviceInfo.getDeviceId()
    requestHeader('device_model', device_model)
    const language = DeviceInfo.getDeviceLocale()
    requestHeader('language', language)
    const brand = DeviceInfo.getBrand()
    const device_type = brand == 'Apple' ? 0 : 1
    requestHeader('device_type', device_type)
    const country = DeviceInfo.getDeviceCountry()
    requestHeader('country', country)
    const device_id = DeviceInfo.getUniqueID()
    requestHeader('device_id', device_id)
    const number = DeviceInfo.getPhoneNumber()
    requestHeader('number', number)
    this.actions.Device_Load({device_model, language, device_type, country, device_id, number})
  }
  async loadUser() {
    const User = JSON.parse(await getUser()) || {token: ''}
    requestHeader('token', User.token)
    this.actions.User_Load(User)
  }
  async loadPaymentInfo() {
    if (this.logged) this.actions.PaymentInfo_Load(JSON.parse(await getPaymentInfo()))
  }
  async loadShoppingCartItems() {
    this.actions.ShoppingCartItem_LoadAll(JSON.parse(await getShoppingCartItems()))
  }
  async loadNotifications() {
    if (this.logged) this.actions.Notification_Notifications()
  }
  renderHeader() {
    return <Header navigation={this.props.navigation} back={this.back}>
      {this.header}
    </Header>
  }
  renderContent() {
    return <Content>
      {[].concat(this.content).filter(o => o)}
    </Content>
  }
  renderFooter() {
    return <Footer navigation={this.props.navigation}>
      {this.footer}
    </Footer>
  }
  render() {
    return <Container>
      {this.renderHeader()}
      {this.renderContent()}
      {this.renderFooter()}
    </Container>
  }
}
