import React from 'react'
import {View, Item, Input, Button, Text, Icon} from 'native-base'
import RadioForm from 'react-native-simple-radio-button'

import {PaymentInfo as style} from '../../survis-themes/styles/components'

import {itemHelper, substr, cardnum, last4} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'

import {Component} from './Component'

export class PaymentInfo extends Component {
  state = {
    num: this.props.item.num,
    name: this.props.item.name,
    expire: this.props.item.expire,
    type: this.props.item.type,
    cvc: this.props.item.cvc,
    shipping_address: this.props.item.shipping_address,
    showAddress: false,
  }
  onChange(k, v) {
    this.setState({[k]: v})
  }
  onSwitch(v) {
    this.setState({showAddress: v})
  }
  render() {
    const {num, name, expire, type, cvc, shipping_address, showAddress} = this.state
    const onSave = this.props.onSave
    return <View style={style.container}>
      <View horizontal center space-between style={style.cardnum}>
        <View horizontal center>
          <Icon name='card'/>
          <Text bold fs14>{num ? last4(cardnum(num)) : 'Not set'}</Text>
        </View>
        <Icon name='ios-trash'/>
      </View>
      <View style={style.info}>
        <Text style={style.heading}>Card holder Name</Text>
        <Item login>
          <Input style={style.input} value={name} placeholder='Your card name'
            onChangeText={e => this.onChange('name', e)}/>
        </Item>
        <Text style={style.heading}>Card Number</Text>
        <Item login>
          <Input style={style.input} value={cardnum(num)} placeholder='**** **** **** ****'
            onChangeText={e => this.onChange('num', e)}/>
        </Item>
        <Text bold fs12 m-b-10>Type of card</Text>
        <RadioForm style={style.checkbox} radio_props={this.props.PaymentMethods.list}
          initial={0} formHorizontal={true} labelHorizontal={true} buttonColor={'#000'} buttonSize={6}
          onPress={e => this.onChange('type', e)}/>
        <Text style={style.heading}>Expire</Text>
        <Item login>
          <Input style={style.input} value={expire} placeholder='Expire date'
            onChangeText={e => this.onChange('expire', e)}/>
        </Item>
        <Text style={style.heading}>Cvc</Text>
        <Item login>
          <Input style={[style.input, {width: 40}]} value={cvc} placeholder='CVC'
            onChangeText={e => this.onChange('cvc', e)}/>
        </Item>
        <Button onPress={onSave} full small loading={this.props.loading}>
          <Text bold>Update</Text>
        </Button>
      </View>
      <View p-25 m-10 grey>
        <Button transparent='transparent' onPress={e => this.onSwitch(true)} style={style.iconedit}>
          <Icon new-shop='new-shop' name='md-create'/>
        </Button>
        <Text bold fs14>Shipping bill</Text>
        {showAddress ? <View>
          <Item login>
            <Input style={style.input} value={shipping_address} placeorder='Enter shipping address'
              onChangeText={e => this.onChange('shipping_address', e)}/>
          </Item>
          <View horizontal style={{marginTop: 20}}>
            <Button onPress={e => onSave(this.state)} full small>
              <Text bold>Save</Text>
            </Button>
            <Text></Text>
            <Button onPress={e => this.onSwitch(false)} full small>
              <Text bold>Cancel</Text>
            </Button>
          </View>
        </View>
        : <Text fs12>Not set</Text>}
      </View>
    </View>
  }
}
