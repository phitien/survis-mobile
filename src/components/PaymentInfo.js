import React from 'react'
import {View, Item, Input, Text, Icon} from 'native-base'
import RadioForm from 'react-native-simple-radio-button'

import {PaymentInfo as style} from '../theme/styles/components'

import {itemHelper, substr, cardnum, cardexpire} from '../utils'

import {Button} from './Button'
import {Image} from './Image'
import {Rating} from './Rating'

import {Component} from './Component'

export class PaymentInfo extends Component {
  state = {
    ucc_num: this.PaymentInfo.ucc_num,
    ucc_name: this.PaymentInfo.ucc_name,
    ucc_expire: this.PaymentInfo.ucc_expire,
    ucc_type: this.PaymentInfo.ucc_type || 'master',
    ucc_cvc: this.PaymentInfo.ucc_cvc,
    bill_address: this.PaymentInfo.bill_address,
    error: false,
    showInfo: false,
    showAddress: false,
  }
  get PaymentInfo() {return this.props.PaymentInfo.PaymentInfo || {}}

  onClearCreditCard() {
    this.setState({showInfo: true, error: false})
    Object.keys(this.state).map(k => this.state[k] = '')
    this.onSave(this.state)
  }
  onChange(k, v) {
    this.setState({[k]: v})
  }
  validate() {
    const {ucc_num, ucc_name, ucc_expire, ucc_type, ucc_cvc} = this.state
    if (ucc_name || ucc_num || ucc_expire || ucc_cvc) {
      if (!ucc_name) return this.setState({error: 'Credit card name is empty'})
      if (cardnum(ucc_num).length != 16) return this.setState({error: 'Credit card number is invalid'})
      if (!ucc_expire || cardexpire(ucc_expire).length != 5) return this.setState({error: 'Credit card expire is invalid'})
      if (!ucc_cvc || ucc_cvc.length != 3) return this.setState({error: 'Credit card CVC is invalid'})
    }
    this.setState({error: false, showInfo: false, showAddress: false})
  }
  async onSave(info) {
    this.validate()
    if (!this.state.error) {
      this.actions.PaymentInfo_Save(info)
    }
  }

  renderInfo() {
    const {ucc_num, ucc_name, ucc_expire, ucc_type, ucc_cvc} = this.state
    return <View m p>
      <Item>
        <Input value={ucc_name} placeholder='Card owner'
          onChangeText={e => this.onChange('ucc_name', e)}/>
      </Item>
      <Item>
        <Input value={cardnum(ucc_num, false)} placeholder='Card number (****-****-****-****)'
          onChangeText={e => this.onChange('ucc_num', e)}/>
      </Item>
      <RadioForm style={style.checkbox} radio_props={this.props.PaymentMethod.PaymentMethods.list}
        initial={0} formHorizontal={true} labelHorizontal={true} buttonSize={6}
        onPress={e => this.onChange('ucc_type', e)}/>
      <View horizontal mt mb>
          <View flex2>
            <Item>
              <Input value={cardexpire(ucc_expire)} placeholder='Card expire (MM/YY)'
                onChangeText={e => this.onChange('ucc_expire', e)}/>
            </Item>
          </View>
          <View flex1>
            <Item>
              <Input value={ucc_cvc} placeholder='cvc (eg: 123)'
                onChangeText={e => this.onChange('ucc_cvc', e.replace(/\D/g, '').substr(0, 3))}/>
            </Item>
          </View>
      </View>
      <View horizontal middle center full>
        <Button flex1 mr onPress={e => this.onSave({
          ucc_num: this.state.ucc_num,
          ucc_name: this.state.ucc_name,
          ucc_expire: this.state.ucc_expire,
          ucc_type: this.state.ucc_type,
          ucc_cvc: this.state.ucc_cvc
        })}><Text bold>Save</Text></Button>
        <Button flex1 ml onPress={e => this.setState({showInfo: false})}><Text bold >Cancel</Text></Button>
      </View>
    </View>
  }
  renderAddress() {
    const {bill_address} = this.state
    return <View>
      <Item>
        <Input white value={bill_address} placeholder='Address'
          onChangeText={e => this.onChange('bill_address', e)}/>
      </Item>
      <View horizontal middle center full>
        <Button flex1 mr onPress={e => this.onSave({bill_address: this.state.bill_address})}><Text bold>Save</Text></Button>
        <Button flex1 ml onPress={e => this.setState({bill_address: '', showAddress: false})}><Text bold >Clear</Text></Button>
      </View>
    </View>
  }
  render() {
    const {ucc_num, bill_address} = this.state
    return <View>
      {this.renderError()}
      <View horizontal grey mt ml mr p>
        <View horizontal flex1>
          <Icon name='card'/>
          <Text bold ml>{ucc_num ? cardnum(ucc_num) : 'Not set'}</Text>
        </View>
        <View horizontal>
          {!this.state.showInfo ? <Button transparent theme onPress={e => this.setState({showInfo: true, showAddress: false})}>
            <Icon name='md-create'/>
          </Button> : null}
          {ucc_num ? <Button transparent theme onPress={e => this.onClearCreditCard()}>
            <Icon name='ios-trash'/>
          </Button> : null}
        </View>
      </View>
      {this.state.showInfo ? this.renderInfo() : null}
      <View grey mt ml mr p>
        <View horizontal space-between>
          <Text bold>Shipping bill</Text>
          {!this.state.showAddress ? <Button transparent theme onPress={e => this.setState({showInfo: false, showAddress: true})}>
            <Icon name='md-create'/>
          </Button> : null}
        </View>
        {this.state.showAddress ? this.renderAddress() : <Text small>{bill_address || 'Not set'}</Text>}
      </View>
    </View>
  }
}
