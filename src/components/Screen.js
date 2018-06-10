import React from 'react'
import {Container, Content} from 'native-base'
import DeviceInfo from 'react-native-device-info'

import * as styles from '../theme/styles/screens'
import {Header, Footer} from '../containers'
import {Component} from './Component'

export class Screen extends Component {
  get klass() {return 'Screen'}
  get styles() {return styles}
  get header() {return this.props.header}
  get content() {return this.props.content}
  get footer() {return this.props.footer}
  get back() {return false}

  async loadDevice(cb) {
    const device_model = DeviceInfo.getDeviceId()
    this.utils.requestHeader('device_model', device_model)
    const language = DeviceInfo.getDeviceLocale()
    this.utils.requestHeader('language', language)
    const brand = DeviceInfo.getBrand()
    const device_type = brand == 'Apple' ? 0 : 1
    this.utils.requestHeader('device_type', device_type)
    const country = DeviceInfo.getDeviceCountry()
    this.utils.requestHeader('country', country)
    const device_id = DeviceInfo.getUniqueID()
    this.utils.requestHeader('device_id', device_id)
    const number = DeviceInfo.getPhoneNumber()
    this.utils.requestHeader('number', number)
    this.actions.Device_Load({device_model, language, device_type, country, device_id, number}).then(cb)
  }
  async loadUser(cb) {
    const User = JSON.parse(await this.utils.getUser()) || {token: ''}
    this.utils.requestHeader('token', User.token)
    this.actions.User_Load(User).then(cb)
  }
  async loadPaymentInfo(cb) {
    if (this.logged) this.actions.PaymentInfo_Load(JSON.parse(await this.utils.getPaymentInfo())).then(cb)
  }
  async loadShoppingCartItems(cb) {
    this.actions.ShoppingCartItem_LoadAll(JSON.parse(await this.utils.getShoppingCartItems())).then(cb)
  }
  async loadNotifications(cb) {
    if (this.logged) this.actions.Notification_Notifications().then(cb)
  }
  renderHeader() {
    return <Header navigation={this.props.navigation} back={this.back}>
      {this.header}
    </Header>
  }
  renderContent() {
    return <Content refreshControl={this.refreshControl}>
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
