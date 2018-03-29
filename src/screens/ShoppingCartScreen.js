import React, {Component} from 'react'
import {Container, View, Content, Spinner, Text, Icon} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import {ScrollView} from 'react-native'

import {ShoppingCartScreen as style} from '../theme/styles/screens'

import {itemHelper} from '../utils'
import {Header, Footer} from '../containers'
import {Button, Image} from '../components'
import {Component as Screen} from '../components'

const {col0W, col1W} = style

export class ShoppingCartScreen extends Screen {
  get items() {return this.props.ShoppingCartItem.ShoppingCartItems.list || []}
  get total() {return this.items.reduce((rs, item) => {
    const {qty, price} = itemHelper(item)
    rs += qty*price
    return rs
  }, 0)}

  async increase(item) {
    this.actions.ShoppingCartItem_Increase(item)
  }
  async decrease(item) {
    this.actions.ShoppingCartItem_Decrease(item)
  }
  async remove(item) {
    this.actions.ShoppingCartItem_Remove(item)
  }

  renderHeader() {
    return <View horizontal p full center>
      <View horizontal style={style.col0}><Text bold >ITEM</Text></View>
      <View horizontal style={style.col1}><Text bold >QTY</Text></View>
      <View horizontal style={style.col2}><Text bold >PRICE</Text></View>
    </View>
  }
  renderList() {
    return this.items.map((item, i) => {
      const {id, image, name, qty, price} = itemHelper(item)
      return <View key={id} horizontal p full center style={{backgroundColor: i % 2 == 0 ? style.evenBgColor : style.oddBgColor}}>
        <View horizontal style={style.col0}>
          <View horizontal mr style={style.image_container}><Image style={style.image} source={{uri: image}}/></View>
          <View flex1><Text small>{name}</Text></View>
        </View>
        <View horizontal middle style={style.col1}>
          <View style={style.control} horizontal>
            <Touch onPress={this.decrease.bind(this, item)}>
              <View center style={style.control_icon}><Text >-</Text></View>
            </Touch>
            <View center style={style.control_text}><Text >{qty}</Text></View>
            <Touch onPress={this.increase.bind(this, item)}>
              <View center style={style.control_icon}><Text >+</Text></View>
            </Touch>
          </View>
        </View>
        <View horizontal middle style={style.col2}>
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
          <View horizotal grey bp><Text bold big>Cart</Text></View>
          {this.renderHeader()}
          {this.renderList()}
        </ScrollView>
      </Content>
      <Footer>
        <View ml center horizontal>
          <Text bold small>Total Amount</Text>
          <Text theme big>${this.total.toFixed(2)}</Text>
        </View>
        <View mr center middle>
          <Button small onPress={this.Actions.CheckoutScreen} disabled={!this.items.length || !this.total}>
            <Text>CHECK OUT</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
