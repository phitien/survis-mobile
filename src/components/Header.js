import React from 'react'
import {Container, Header as NBHeader, Item, Input, Icon, Button, Text, Badge} from 'native-base'
import {StyleProvider} from 'native-base'

import {Header as style} from '../theme/styles/components'

import {getTheme} from '../theme'

import {Component} from './Component'

export class Header extends Component {
  state = {q: this.props.Shop.SearchShops.filter.q}

  async componentDidMount() {
    this.state.q = this.props.Shop.SearchShops.filter.q
  }

  onPressScan() {
    if (this.logged) this.Actions.QrScanScreen()
    else {
      this.actions.Screen_Save({id: 'QrScanScreen'})
      this.Actions.LoginScreen()
    }
  }
  onPressCart() {
    if (this.logged) this.Actions.ShoppingCartScreen()
    else {
      this.actions.Screen_Save({id: 'ShoppingCartScreen'})
      this.Actions.LoginScreen()
    }
  }
  onPressBack() {
    this.setState({q: ''})
    this.actions.Shop_SearchShops_Reset()
    this.actions.Category_Reset()
    this.actions.Category_Categorys()
    .then(e => this.Actions.pop())
  }
  onSearchOk() {
    this.actions.Shop_SearchShops_Search({q: this.state.q, page: 0})
    let currentScene = this.Actions.currentScene.toString()
    if (currentScene !== 'SearchScreen') this.Actions.SearchScreen()
    else this.actions.Shop_SearchShops()
  }
  onChangeText(q) {
    this.setState({q})
  }

  renderBack() {
    if (this.props.back)
      return <Button onPress={this.onPressBack.bind(this)}>
        <Icon name='ios-arrow-back'/>
      </Button>
    return <Text></Text>
  }
  renderQrScan() {
    return <Button onPress={this.onPressScan.bind(this)}>
      <StyleProvider style={getTheme({iconFamily: 'FontAwesome'})}><Icon name='qrcode'/></StyleProvider>
    </Button>
  }
  renderSearch() {
    return <Item>
      <Icon name='search'/>
      <Input
        placeholder='Search'
        returnKeyType='search'
        autoCorrect={false}
        autoCapitalize='none'
        value={this.state.q}
        onChangeText={this.onChangeText.bind(this)}
        onSubmitEditing={this.onSearchOk.bind(this)}/>
    </Item>
  }
  renderCart() {
    const cartCount = this.props.ShoppingCartItem.ShoppingCartItems.list.length
    return <Button onPress={this.onPressCart.bind(this)}>
      <Icon name='ios-cart'/>
      {cartCount > 0 ? <Badge top-right smt>
        <Text tiny>{cartCount}</Text>
      </Badge> : null}
    </Button>
  }
  render() {
    return <NBHeader>
      {this.renderBack()}
      {this.renderQrScan()}
      {this.renderSearch()}
      {this.renderCart()}
    </NBHeader>
  }
}
