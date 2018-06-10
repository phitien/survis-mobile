import React from 'react'
import {View, Item, Input, Text, Icon} from 'native-base'
import RadioForm from 'react-native-simple-radio-button'
import DatePicker from 'react-native-datepicker'

import {Button} from './Button'
import {Image} from './Image'
import {Rating} from './Rating'

import {Component} from './Component'

export class User extends Component {
  state = {
    usr_mobile: this.User.usr_mobile || '',
    usr_name: this.User.usr_name || '',
    usr_fname: this.User.usr_fname || '',
    usr_lname: this.User.usr_lname || '',
    usr_birthday: this.User.usr_birthday ? this.utils.date(this.User.usr_birthday).toLocaleDateString() : '',
    usr_email: this.User.usr_email || '',
		fullname: [(this.User.usr_fname||  '').trim(), (this.User.usr_lname || '').trim()].filter(o => o).join(' ') || this.User.usr_name || '',
    usr_password: '',
    ucc_num: this.PaymentInfo.ucc_num,
    ucc_name: this.PaymentInfo.ucc_name,
    ucc_expire: this.PaymentInfo.ucc_expire,
    ucc_type: this.PaymentInfo.ucc_type || 'master',
    ucc_cvc: this.PaymentInfo.ucc_cvc,
    bill_address: this.PaymentInfo.bill_address,
    showInfo: false,
    showPassword: false,
    showPaymentInfo: false,
    showBillAddress: false,
    error: false,
  }
  get klass() {return 'User'}
  get PaymentInfo() {return this.props.PaymentInfo.PaymentInfo || {}}
	get usr_fname() {
		return this.state.usr_fname = this.state.fullname.split(' ').shift()
	}
	get usr_lname() {
		const words = this.state.fullname.split(' ')
		this.state.usr_fname = words.shift()
		return this.state.usr_lname = words.join(' ')
	}
	get error() {return this.state.error || this.props.User.error}
  showSegment(n) {
    const segments = ['showInfo', 'showPassword', 'showPaymentInfo', 'showBillAddress']
    segments.filter(o => o != n).map(o => this.state[o] = false)
    this.state[n] = true
    this.setState(this.state)
  }
  hideSegments() {
    ['showInfo', 'showPassword', 'showPaymentInfo', 'showBillAddress'].map(o => this.state[o] = false)
  }
  onClearCreditCard() {
    this.setState({showInfo: true, error: false})
    Object.keys(this.state).map(k => this.state[k] = '')
    this.onSavePaymentInfo(this.state)
  }
  onChange(k, v) {
    this.setState({[k]: v})
  }
  onChangeName(v) {
		this.onChange('fullname', v)
  }
  validate() {
		if (!this.state.usr_email) return this.setState({error: 'Email is invalid'})
		if (!this.state.fullname) return this.setState({error: 'Name is required'})
		if (!this.state.usr_mobile) return this.setState({error: 'Mobile is required'})
		if (!this.state.usr_birthday) return this.setState({error: 'Birthday is required'})
    this.setState({error: false})
  }
  validatePaymentInfo() {
    const {ucc_num, ucc_name, ucc_expire, ucc_type, ucc_cvc} = this.state
    if (ucc_name || ucc_num || ucc_expire || ucc_cvc) {
      if (!ucc_name) return this.setState({error: 'Credit card name is empty'})
      if (this.utils.cardnum(ucc_num).length != 16) return this.setState({error: 'Credit card number is invalid'})
      if (!ucc_expire || this.utils.cardexpire(ucc_expire).length != 5) return this.setState({error: 'Credit card expire is invalid'})
      if (!ucc_cvc || ucc_cvc.length != 3) return this.setState({error: 'Credit card CVC is invalid'})
    }
    this.setState({error: false, showInfo: false, showBillAddress: false})
  }
  async onSavePaymentInfo(info) {
    this.validatePaymentInfo()
    if (!this.state.error) {
      this.actions.PaymentInfo_Save(info)
      .then(e => this.hideSegments())
    }
  }
  async onSave(info) {
    this.validate()
    if (!this.state.error) this.props.onSave(info)
  }
	async onSavePassword(password) {
		if (!this.state.usr_password || this.state.usr_password.length < 6) return this.setState({error: 'Password is invalid. Must have more than 6 letters'})
		this.setState({error: false})
		if (!this.state.error) this.props.onSavePassword(password)
	}

  renderPaymentInfo() {
    const {ucc_num, ucc_name, ucc_expire, ucc_type, ucc_cvc} = this.state
    return <View m p>
      <Item>
        <Input value={ucc_name} placeholder='Card owner'
          onChangeText={e => this.onChange('ucc_name', e)}/>
      </Item>
      <Item>
        <Input value={this.utils.cardnum(ucc_num, false)} placeholder='Card number (****-****-****-****)'
          onChangeText={e => this.onChange('ucc_num', e)}/>
      </Item>
      <RadioForm style={this.cmpStyle.checkbox} radio_props={this.props.PaymentMethod.PaymentMethods.list}
        initial={0} formHorizontal={true} labelHorizontal={true} buttonSize={6}
        onPress={e => this.onChange('ucc_type', e)}/>
      <View horizontal mt mb>
          <View flex2>
            <Item>
              <Input value={this.utils.cardexpire(ucc_expire)} placeholder='Card expire (MM/YY)'
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
        <Button flex1 mr onPress={e => this.onSavePaymentInfo({
          ucc_num: this.state.ucc_num,
          ucc_name: this.state.ucc_name,
          ucc_expire: this.state.ucc_expire,
          ucc_type: this.state.ucc_type,
          ucc_cvc: this.state.ucc_cvc
        })}><Text bold>Save</Text></Button>
        <Button flex1 ml onPress={e => this.setState({showPaymentInfo: false})}><Text bold >Cancel</Text></Button>
      </View>
    </View>
  }
  renderBillAddress() {
    const {bill_address} = this.state
    return <View>
      <Item>
        <Input white value={bill_address} placeholder='Address'
          onChangeText={e => this.onChange('bill_address', e)}/>
      </Item>
      <View horizontal middle center full>
        <Button flex1 mr onPress={e => this.onSavePaymentInfo({bill_address: this.state.bill_address})}><Text bold>Save</Text></Button>
        <Button flex1 ml onPress={e => this.setState({bill_address: '', showBillAddress: false})}><Text bold >Clear</Text></Button>
      </View>
    </View>
  }
  renderPassword() {
    const {usr_password} = this.state
    return <View>
      <Item login>
        <Input secureTextEntry={true} placeholder='Password (> 6 charecters)'
          onChangeText={e => this.onChange('usr_password', e)}/>
      </Item>
      <View horizontal middle center full>
        <Button flex1 mr loading={this.props.User.loading} onPress={e => this.onSavePassword(this.state.usr_password)}><Text bold>Save</Text></Button>
        <Button flex1 ml onPress={e => this.setState({usr_password: '', showPassword: false})}><Text bold >Cancel</Text></Button>
      </View>
    </View>
  }
  renderInfo() {
    const {usr_id, token, usr_mobile, usr_birthday, usr_email} = this.state
    return <View m p>
      <Item>
        <Input value={this.state.fullname} placeholder='Fullname'
           onChangeText={e => this.onChangeName(e)}
					 returnKeyType='done'/>
      </Item>
			<View horizontal mt mb>
				<View flex1>
					<Text label>Phone</Text>
		      <Item>
		        <Input value={usr_mobile} placeholder='Mobile'
		          onChangeText={e => this.onChange('usr_mobile', e)}
							returnKeyType='done'/>
		      </Item>
				</View>
				<View flex1>
					<Text label>Date of birth</Text>
		      <DatePicker customStyles={this.cmpStyle.datepicker} date={usr_birthday} mode='date' placeholder='Birthday'
		        format='YYYY-MM-DD' minDate='1900-01-01'
		        confirmBtnText='Ok' cancelBtnText='Cancel'
		        onDateChange={e => this.onChange('usr_birthday', e)}/>
				</View>
			</View>
      <View horizontal middle center full>
        <Button flex1 mr loading={this.props.User.loading} onPress={e => this.onSave({
          usr_mobile: this.state.usr_mobile,
          usr_fname: this.usr_fname,
          usr_lname: this.usr_lname,
          usr_birthday: this.state.usr_birthday,
          usr_email: this.state.usr_email,
        })}><Text bold>Save</Text></Button>
        <Button flex1 ml onPress={e => this.setState({
          usr_mobile: this.User.usr_mobile,
          usr_fname: this.User.usr_fname,
          usr_lname: this.User.usr_lname,
          usr_birthday: this.User.usr_birthday,
          usr_email: this.User.usr_email,
          showInfo: false
        })}><Text bold >Cancel</Text></Button>
      </View>
    </View>
  }
  render() {
    const {usr_email, usr_mobile, usr_birthday} = this.state
    const {ucc_num, ucc_name, ucc_expire, ucc_type, ucc_cvc} = this.state
    const {bill_address} = this.state
    return <View>
      {this.renderError()}
      <View grey mt ml mr p>
        <View horizontal center space-between>
          <View>
            {this.state.fullname ? <Text bold>{this.state.fullname}</Text> : null}
  					<Text small>{usr_email}</Text>
            {usr_mobile ? <Text small>{usr_mobile}</Text> : null}
            {usr_birthday ? <Text small>{usr_birthday}</Text> : null}
          </View>
          {!this.state.showInfo ? <Button transparent theme onPress={e => this.showSegment('showInfo')}>
            <Icon name='md-create'/>
          </Button> : null}
        </View>
      </View>
      {this.state.showInfo ? this.renderInfo() : null}
      <View grey mt ml mr p>
        <View horizontal center space-between>
          <Text label>Change password</Text>
          {!this.state.showPassword ? <Button transparent theme onPress={e => this.showSegment('showPassword')}>
            <Icon name='md-create'/>
          </Button> : null}
        </View>
        {this.state.showPassword ? this.renderPassword() : <Text small>******</Text>}
      </View>
      <View horizontal grey mt ml mr p>
        <View horizontal flex1>
          <Icon name='card'/>
          <Text bold ml>{ucc_num ? this.utils.cardnum(ucc_num) : 'Not set'}</Text>
        </View>
        <View horizontal>
          {!this.state.showPaymentInfo ? <Button transparent theme onPress={e => this.showSegment('showPaymentInfo')}>
            <Icon name='md-create'/>
          </Button> : null}
        </View>
      </View>
      {this.state.showPaymentInfo ? this.renderPaymentInfo() : null}
      <View grey mt ml mr p>
        <View horizontal space-between>
          <Text bold>Shipping bill</Text>
          {!this.state.showBillAddress ? <Button transparent theme onPress={e => this.showSegment('showBillAddress')}>
            <Icon name='md-create'/>
          </Button> : null}
        </View>
        {this.state.showBillAddress ? this.renderBillAddress() : <Text small>{bill_address || 'Not set'}</Text>}
      </View>
    </View>
  }
}
