import React from 'react'
import {View, Item, Input, Text, Icon} from 'native-base'
import RadioForm from 'react-native-simple-radio-button'
import DatePicker from 'react-native-datepicker'

import {User as style} from '../theme/styles/components'

import {itemHelper, substr, cardnum, cardexpire} from '../utils'

import {Button} from './Button'
import {Image} from './Image'
import {Rating} from './Rating'

import {Component} from './Component'

export class User extends Component {
  state = {
    usr_mobile: this.User.usr_mobile || '',
    usr_fname: this.User.usr_fname || '',
    usr_lname: this.User.usr_lname || '',
    usr_birthday: this.User.usr_birthday || '',
    usr_email: this.User.usr_email || '',
		fullname: [(this.User.usr_fname||  '').trim(), (this.User.usr_lname || '').trim()].filter(o => o).join(' '),
    usr_password: '',
    error: false,
    showInfo: false,
    showPassword: false,
  }
	get usr_fname() {
		return this.state.usr_fname = this.state.fullname.split(' ').shift()
	}
	get usr_lname() {
		const words = this.state.fullname.split(' ')
		this.state.usr_fname = words.shift()
		return this.state.usr_lname = words.join(' ')
	}
	get error() {return this.state.error || this.props.User.error}
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
  onSave(info) {
    this.validate()
    if (!this.state.error) this.props.onSave(info)
  }
	onSavePassword(password) {
		if (!this.state.usr_password || this.state.usr_password.length < 6) return this.setState({error: 'Password is invalid. Must have more than 6 letters'})
		this.setState({error: false})
		if (!this.state.error) this.props.onSavePassword(password)
	}

  renderPassword() {
    const {usr_password} = this.state
    return <View>
      <Item login>
        <Input secureTextEntry={true} placeholder='Password (> 6 charecters)'
          onChangeText={e => this.onChange('usr_password', e)}/>
      </Item>
      <View actions mt style={style.actions}>
        <Button full small mr loading={this.props.User.loading} onPress={e => this.onSavePassword(this.state.usr_password)}><Text bold>Save</Text></Button>
        <Button full small ml onPress={e => this.setState({usr_password: '', showPassword: false})}><Text bold >Cancel</Text></Button>
      </View>
    </View>
  }
  renderInfo() {
    const {usr_mobile, usr_birthday, usr_email} = this.state
    return <View p style={style.info}>
      <Text label>Name</Text>
      <Item login error={false}>
        <Input value={this.state.fullname} placeholder='Fullname'
           onChangeText={e => this.onChangeName(e)}
					 returnKeyType='ok'/>
      </Item>
			<View horizontal>
				<View flex1>
					<Text label>Phone</Text>
		      <Item login error={false}>
		        <Input value={usr_mobile} placeholder='Mobile'
		          onChangeText={e => this.onChange('usr_mobile', e)}
							returnKeyType='ok'/>
		      </Item>
				</View>
				<View flex1>
					<Text label>Date of birth</Text>
		      <DatePicker customStyles={style.datepicker} date={usr_birthday} mode='date' placeholder='Birthday'
		        format='YYYY-MM-DD' minDate='1900-01-01'
		        confirmBtnText='Ok' cancelBtnText='Cancel'
		        onDateChange={e => this.onChange('usr_birthday', e)}/>
				</View>
			</View>
      <View actions mt style={style.actions}>
        <Button full small mr loading={this.props.User.loading} onPress={e => this.onSave({
          usr_mobile: this.state.usr_mobile,
          usr_fname: this.usr_fname,
          usr_lname: this.usr_lname,
          usr_birthday: this.state.usr_birthday,
          usr_email: this.state.usr_email,
        })}><Text bold>Save</Text></Button>
        <Button full small ml onPress={e => this.setState({
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
    return <View p style={style.container}>
      {this.renderError()}
      <View horizontal center space-between p grey style={style.user_info}>
        <View>
          {this.state.fullname ? <Text bold>{this.state.fullname}</Text> : null}
					<Text small>{usr_email}</Text>
          {usr_mobile ? <Text small>{usr_mobile}</Text> : null}
          {usr_birthday ? <Text small>{usr_birthday}</Text> : null}
        </View>
        <View horizontal center middle>
          {!this.state.showInfo ? <Button iconRight transparent theme onPress={e => this.setState({showInfo: true, showPassword: false})}>
            <Icon name='md-create'/>
          </Button> : null}
        </View>
      </View>
      {this.state.showInfo ? this.renderInfo() : null}
      <View pb pl pr mt grey style={style.password}>
        <View horizontal center space-between>
          <Text label>Change password</Text>
          {!this.state.showPassword ? <Button iconRight transparent theme onPress={e => this.setState({showInfo: false, showPassword: true})}>
            <Icon name='md-create'/>
          </Button> : null}
        </View>
        {this.state.showPassword ? this.renderPassword() : <Text small>******</Text>}
      </View>
    </View>
  }
}
