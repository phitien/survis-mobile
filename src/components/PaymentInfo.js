import React from 'react'
import {View, Item, Input, Text, Icon} from 'native-base'
import RadioForm from 'react-native-simple-radio-button'

import {PaymentInfo as style} from '../../survis-themes/styles/components'

import {itemHelper, substr, cardnum, cardexpire} from '../utils'

import {Button} from './Button'
import {Image} from './Image'
import {Rating} from './Rating'

import {Component} from './Component'

export class PaymentInfo extends Component {
  state = {
    ucc_num: this.props.PaymentInfo.ucc_num,
    ucc_name: this.props.PaymentInfo.ucc_name,
    ucc_expire: this.props.PaymentInfo.ucc_expire,
    ucc_type: this.props.PaymentInfo.ucc_type || 'master',
    ucc_cvc: this.props.PaymentInfo.ucc_cvc,
    bill_address: this.props.PaymentInfo.bill_address,
    error: false,
    showInfo: false,
    showAddress: false,
  }
  onClearCreditCard() {
		Object.assign(this.state, this.props.PaymentInfo.default)
    this.onSave(this.props.PaymentInfo.default)
    this.setState({showInfo: true, error: false})
  }
  onChange(k, v) {
    this.setState({[k]: v})
  }
  validate() {
    if (this.state.ucc_name || this.state.ucc_num || this.state.ucc_expire || this.state.ucc_cvc) {
      if (!this.state.ucc_name) return this.setState({error: 'Credit card name is empty'})
      if (cardnum(this.state.ucc_num).length != 16) return this.setState({error: 'Credit card number is invalid'})
      if (!this.state.ucc_expire || cardexpire(this.state.ucc_expire).length != 5) return this.setState({error: 'Credit card expire is invalid'})
      if (!this.state.ucc_cvc || this.state.ucc_cvc.length != 3) return this.setState({error: 'Credit card CVC is invalid'})
    }
    this.setState({error: false, showInfo: false, showAddress: false})
  }
  onSave(info) {
    this.validate()
    if (!this.state.error) this.props.onSave(info)
  }

  renderInfo() {
    const {ucc_num, ucc_name, ucc_expire, ucc_type, ucc_cvc} = this.state
    return <View style={style.info}>
      <Text style={style.heading}>Card holder Name</Text>
      <Item login>
        <Input style={style.input} value={ucc_name} placeholder='Your card name'
          onChangeText={e => this.onChange('ucc_name', e)}/>
      </Item>
      <Text style={style.heading}>Card Number</Text>
      <Item login>
        <Input style={style.input} value={cardnum(ucc_num, false)} placeholder='****-****-****-****'
          onChangeText={e => this.onChange('ucc_num', e)}/>
      </Item>
      <RadioForm style={style.checkbox} radio_props={this.props.PaymentMethods.list}
        initial={0} formHorizontal={true} labelHorizontal={true} buttonSize={6}
        onPress={e => this.onChange('ucc_type', e)}/>
      <View horizontal style={style.heading}>
          <View flex1>
            <Text style={style.heading}>Expire</Text>
            <Item login>
              <Input style={style.input} value={cardexpire(ucc_expire)} placeholder='MM/YY'
                onChangeText={e => this.onChange('ucc_expire', e)}/>
            </Item>
          </View>
          <View flex1>
            <Text style={style.heading}>Cvc</Text>
            <Item login>
              <Input style={style.input} value={ucc_cvc} placeholder='123'
                onChangeText={e => this.onChange('ucc_cvc', e.replace(/\D/g, '').substr(0, 3))}/>
            </Item>
          </View>
      </View>
      <View horizontal center style={style.actions}>
        <Button full small mr onPress={e => this.onSave({
          ucc_num: this.state.ucc_num,
          ucc_name: this.state.ucc_name,
          ucc_expire: this.state.ucc_expire,
          ucc_type: this.state.ucc_type,
          ucc_cvc: this.state.ucc_cvc
        })}><Text bold>Save</Text></Button>
        <Button full small ml onPress={e => this.setState({showInfo: false})}><Text bold >Cancel</Text></Button>
      </View>
    </View>
  }
  renderAddress() {
    const {bill_address} = this.state
    return <View>
      <Item login>
        <Input white value={bill_address} placeholder='Address'
          onChangeText={e => this.onChange('bill_address', e)}/>
      </Item>
      <View horizontal center style={style.actions}>
        <Button full small mr onPress={e => this.onSave({bill_address: this.state.bill_address})}><Text bold>Save</Text></Button>
        <Button full small ml onPress={e => this.setState({bill_address: '', showAddress: false})}><Text bold >Clear</Text></Button>
      </View>
    </View>
  }
  renderError() {
    return this.state.error ? <View center><Text red small center>{this.state.error}</Text></View> : null
  }
  render() {
    const {ucc_num} = this.state
    return <View style={style.container}>
      {this.renderError()}
      <View horizontal center space-between style={style.cardnum}>
        <View horizontal center>
          <Icon theme name='card' style={style.card_icon}/>
          <Text bold fs14>{ucc_num ? cardnum(ucc_num) : 'Not set'}</Text>
        </View>
        <View horizontal center>
          {!this.state.showInfo ? <Button iconRight transparent primary onPress={e => this.setState({showInfo: true, showAddress: false})}>
            <Icon theme name='md-create'/>
          </Button> : null}
          {ucc_num ? <Button iconRight transparent primary onPress={e => this.onClearCreditCard()}>
            <Icon theme name='ios-trash'/>
          </Button> : null}
        </View>
      </View>
      {this.state.showInfo ? this.renderInfo() : null}
      <View style={style.shipping}>
        <View horizontal center space-between>
          <Text style={style.heading}>Shipping bill</Text>
          {!this.state.showAddress ? <Button iconRight transparent primary onPress={e => this.setState({showInfo: false, showAddress: true})}>
            <Icon theme name='md-create'/>
          </Button> : null}
        </View>
        {this.state.showAddress ? this.renderAddress() : <Text fs12>{this.state.bill_address || 'Not set'}</Text>}
      </View>
    </View>
  }
}
