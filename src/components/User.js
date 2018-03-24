import React from 'react'
import {View, Item, Input, Text, Icon} from 'native-base'
import RadioForm from 'react-native-simple-radio-button'
import DatePicker from 'react-native-datepicker'

import {User as style} from '../../survis-themes/styles/components'

import {itemHelper, substr, cardnum, cardexpire} from '../utils'

import {Button} from './Button'
import {Image} from './Image'
import {Rating} from './Rating'

import {Component} from './Component'

export class User extends Component {
  state = {
    usr_mobile: this.props.User.usr_mobile || '',
    usr_fname: this.props.User.usr_fname || '',
    usr_lname: this.props.User.usr_lname || '',
    usr_birthday: this.props.User.usr_birthday || '',
    usr_email: this.props.User.usr_email || '',
		fullname: [(this.props.User.usr_fname||  '').trim(), (this.props.User.usr_lname || '').trim()].filter(o => o).join(' '),
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
        <Input style={style.input} secureTextEntry={true} placeholder='Password (> 6 charecters)'
          onChangeText={e => this.onChange('usr_password', e)}/>
      </Item>
      <View horizontal center style={style.actions}>
        <Button full small mr loading={this.props.User.loading} onPress={e => this.onSavePassword(this.state.usr_password)}><Text bold>Save</Text></Button>
        <Button full small ml onPress={e => this.setState({usr_password: '', showPassword: false})}><Text bold >Cancel</Text></Button>
      </View>
    </View>
  }
  renderInfo() {
    const {usr_mobile, usr_birthday, usr_email} = this.state
    return <View style={style.info}>
      <Text style={style.heading}>Name</Text>
      <Item login error={false}>
        <Input style={style.input} value={this.state.fullname} placeholder='Fullname'
           onChangeText={e => this.onChangeName(e)}
					 returnKeyType='ok'/>
      </Item>
			<View horizontal>
				<View flex1>
					<Text style={style.heading}>Phone</Text>
		      <Item login error={false}>
		        <Input style={style.input} value={usr_mobile} placeholder='Mobile'
		          onChangeText={e => this.onChange('usr_mobile', e)}
							returnKeyType='ok'/>
		      </Item>
				</View>
				<View flex1>
					<Text style={style.heading}>Date of birth</Text>
		      <DatePicker customStyles={style.datepicker} date={usr_birthday} mode='date' placeholder='Birthday'
		        format='YYYY-MM-DD' minDate='1900-01-01'
		        confirmBtnText='Ok' cancelBtnText='Cancel'
		        onDateChange={e => this.onChange('usr_birthday', e)}/>
				</View>
			</View>
      <View horizontal center style={style.actions}>
        <Button full small mr loading={this.props.User.loading} onPress={e => this.onSave({
          usr_mobile: this.state.usr_mobile,
          usr_fname: this.usr_fname,
          usr_lname: this.usr_lname,
          usr_birthday: this.state.usr_birthday,
          usr_email: this.state.usr_email,
        })}><Text bold>Save</Text></Button>
        <Button full small ml onPress={e => this.setState({
          usr_mobile: this.props.User.usr_mobile,
          usr_fname: this.props.User.usr_fname,
          usr_lname: this.props.User.usr_lname,
          usr_birthday: this.props.User.usr_birthday,
          usr_email: this.props.User.usr_email,
          showInfo: false
        })}><Text bold >Cancel</Text></Button>
      </View>
    </View>
  }
  render() {
    const {usr_email, usr_mobile, usr_birthday} = this.state
    return <View style={style.container}>
      {this.renderError()}
      <View horizontal center space-between style={style.user_info}>
        <View>
          {this.state.fullname ? <Text bold fs12>{this.state.fullname}</Text> : null}
					<Text fs12>{usr_email}</Text>
          {usr_mobile ? <Text fs12>{usr_mobile}</Text> : null}
          {usr_birthday ? <Text fs12>{usr_birthday}</Text> : null}
        </View>
        <View horizontal center>
          {!this.state.showInfo ? <Button iconRight transparent primary onPress={e => this.setState({showInfo: true, showPassword: false})}>
            <Icon theme name='md-create'/>
          </Button> : null}
        </View>
      </View>
      {this.state.showInfo ? this.renderInfo() : null}
      <View style={style.password}>
        <View horizontal center space-between>
          <Text style={style.heading}>Change password</Text>
          {!this.state.showPassword ? <Button iconRight transparent primary onPress={e => this.setState({showInfo: false, showPassword: true})}>
            <Icon theme name='md-create'/>
          </Button> : null}
        </View>
        {this.state.showPassword ? this.renderPassword() : <Text fs12>******</Text>}
      </View>
    </View>
  }
}
