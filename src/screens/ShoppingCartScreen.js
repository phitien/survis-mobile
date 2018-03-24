import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text, Icon} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import {ScrollView} from 'react-native'

import {ShoppingCartScreen as style} from '../../survis-themes/styles/screens'

import {itemHelper, setShoppingCart} from '../utils'
import {Header, Footer} from '../containers'
import {Button, Image} from '../components'
import {Component as Screen} from '../components'

const {col0W, col1W} = style

export class ShoppingCartScreen extends Screen {
  get total() {return this.props.ShoppingCart.list.reduce((rs, item) => {
    const {qty, price} = itemHelper(item)
    rs += qty*price
    return rs
  }, 0)}

  async increase(item) {
    this.actions.ShoppingCart_Increase(item)
    await setShoppingCart(this.props.ShoppingCart)
  }
  async decrease(item) {
    this.actions.ShoppingCart_Decrease(item)
    await setShoppingCart(this.props.ShoppingCart)
  }
  async remove(item) {
    this.actions.ShoppingCart_Remove(item)
    await setShoppingCart(this.props.ShoppingCart)
  }

  renderHeader() {
    return <View horizontal style={style.row}>
      <View horizontal style={style.col0}><Text bold fs14>ITEM</Text></View>
      <View horizontal style={style.col1}><Text bold fs14>QTY</Text></View>
      <View horizontal style={style.col2}><Text bold fs14>PRICE</Text></View>
    </View>
  }
  renderList() {
    return this.props.ShoppingCart.list.map((item, i) => {
      const {id, image, name, qty, price} = itemHelper(item)
      return <View key={id} horizontal style={{...style.row, backgroundColor: i % 2 == 0 ? style.evenBgColor : style.oddBgColor}}>
        <View horizontal style={style.col0}>
          <View horizontal style={style.image_container}>
            <Image style={style.image} source={{uri: image}}/>
          </View>
          <View flex1>
            <Text fs12>{name}</Text>
          </View>
        </View>
        <View horizontal center-h style={style.col1}>
          <View style={style.control} horizontal>
            <Touch onPress={this.decrease.bind(this, item)}>
              <View center style={style.control_icon}><Text fs14>-</Text></View>
            </Touch>
            <View center style={style.control_text}><Text fs14>{qty}</Text></View>
            <Touch onPress={this.increase.bind(this, item)}>
              <View center style={style.control_icon}><Text fs14>+</Text></View>
            </Touch>
          </View>
        </View>
        <View horizontal center-h style={style.col2}>
          <Text theme style={style.price}>${(qty*price).toFixed(2)}</Text>
          <Icon theme onPress={this.remove.bind(this, item)} name='ios-trash'/>
        </View>
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
          <Button small onPress={this.Actions.CheckoutScreen} disabled={!this.props.ShoppingCart.list.length || !this.total}>
            <Text>CHECK OUT</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
