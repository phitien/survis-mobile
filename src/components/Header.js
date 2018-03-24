import React from 'react'
import {Container, Header as NBHeader, Item, Input, Icon, Button, Text, Badge} from 'native-base'

import {Header as style} from '../../survis-themes/styles/components'

import {Component} from './Component'

export class Header extends Component {
  state = {q: this.props.Search.filter.q}

  async componentDidMount() {
    this.state.q = this.props.Search.filter.q
  }

  onPressScan() {
    if (this.logged) this.Actions.QrScanScreen()
    else {
      this.actions.Screen_Set({redirect: 'QrScanScreen'})
      this.Actions.LoginScreen()
    }
  }
  onPressCart() {
    if (this.logged) this.Actions.ShoppingCartScreen()
    else {
      this.actions.Screen_Set({redirect: 'ShoppingCartScreen'})
      this.Actions.LoginScreen()
    }
  }
  onPressBack() {
    this.setState({q: ''})
    this.actions.Search_Reset()
    this.actions.Categories_Reset()
    this.actions.Categories_Get()
    this.Actions.pop()
  }
  onSearchOk() {
    this.actions.Search_Search({q: this.state.q})
    let currentScene = this.Actions.currentScene.toString()
    if (currentScene !== 'search') this.Actions.SearchScreen()
  }
  onChangeText(q) {
    this.setState({q})
  }

  renderBack() {
    if (this.props.back)
      return <Button iconRight transparent onPress={this.onPressBack.bind(this)}>
        <Icon name='ios-arrow-back'/>
      </Button>
    return <Text></Text>
  }
  renderQrScan() {
    return <Button transparent onPress={this.onPressScan.bind(this)}>
      <Icon name='ios-qr-scanner'/>
    </Button>
  }
  renderSearch() {
    return <Item>
      <Icon transparent name='ios-search'/>
      <Input transparent
        placeholder='Search'
        returnKeyType='search'
        autoCorrect={false}
        autoCapitalize={false}
        value={this.state.q}
        onChangeText={this.onChangeText.bind(this)}
        onSubmitEditing={this.onSearchOk.bind(this)}/>
    </Item>
  }
  renderCart() {
    const cartCount = this.props.ShoppingCart.list.length
    return <Button transparent onPress={this.onPressCart.bind(this)}>
      {cartCount > 0 ? <Badge style={style.shoppingcart}>
        <Text style={style.count}>{cartCount}</Text>
      </Badge> : null}
      <Icon name='ios-cart'/>
    </Button>
  }
  render() {
    return <NBHeader searchBar rounded style={style.container}>
      {this.renderBack()}
      {this.renderQrScan()}
      {this.renderSearch()}
      {this.renderCart()}
    </NBHeader>
  }
}
