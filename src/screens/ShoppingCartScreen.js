import React, {Component} from 'react'
import {Container, View, Content, Spinner, Button, Text, Icon} from 'native-base'
import {ScrollView} from 'react-native'

import {ShoppingCartScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer} from '../containers'
import {Image} from '../components'
import {Component as Screen} from '../components'

export class ShoppingCartScreen extends Screen {
  get total() {return this.props.ShoppingCart.list.reduce((rs, item) => {
    rs += (item.price || 0) * item.qty
    return rs
  }, 0)}

  renderHeader() {
    return <View horizontal p-16>
      <Text bold fs14 style={{flex: 4}}>ITEM</Text>
      <Text bold fs14 style={{flex: 2}}>QTY</Text>
      <Text bold fs14 style={{flex: 2}}>PRICE</Text>
    </View>
  }
  renderList() {
    return this.props.ShoppingCart.list.map((item, i) => {
      return <View horizontal center m-t-5 style={{...style.container, backgroundColor: i % 2 == 0 ? style.evenBgColor : style.oddBgColor}}>
        <Image resizeMode='stretch' style={style.image} source={{uri: item.image}}/>
        <Text fs12 style={{flex: 2}}>{item.name}</Text>
        <View center-h style={{flex: 2}}>
          <View horizontal light-border center space-between
            p-l-10 p-r-10 m-r-10 style={{alignSelf: 'stretch'}}>
            <Icon onPress={e => this.actions.ShoppingCart_Decrease(item)} name='ios-remove'/>
            <Text>{item.qty}</Text>
            <Icon onPress={e => this.actions.ShoppingCart_Increase(item)} name='ios-add'/>
          </View>
        </View>
        <Text fs14 style={{flex: 1}}>{((item.price || 0) * item.qty).toFixed(2)}</Text>
        <Icon onPress={e => this.actions.ShoppingCart_Remove(item)} name='ios-trash'/>
        <Text></Text>
      </View>
    })
  }
  render() {
    return <Container>
      <Header back='back'/>
      <Content>
        <ScrollView>
          <View horizotal grey p-16><Text bold fs16>Cart</Text></View>
          {this.renderHeader()}
          {this.renderList()}
        </ScrollView>
      </Content>
      <Footer>
        <View m-l-10 center horizontal>
          <Text bold fs12>Total Amount</Text>
          <Text theme fs18>${this.total.toFixed(2)}</Text>
        </View>
        <View m-r-10 center center-h>
          <Button small onPress={this.Actions.checkout_shipping} disabled={this.props.ShoppingCart.list.length && this.total}>
            <Text>CHECK OUT</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
