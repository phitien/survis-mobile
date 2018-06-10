import React from 'react'
import {TouchableOpacity as Touch} from 'react-native'
import {Tabs, Tab, Item, Input, Text, View, Icon, CheckBox} from 'native-base'
import {StyleProvider} from 'native-base'

import {Button} from './Button'
import {Component} from './Component'

export class SignUpForm extends Component {
  state = {usr_email: '', usr_password: '', usr_name: '', usr_mobile: ''}
  get klass() {return 'SignUpForm'}
  get error() {return this.props.User.error || this.state.error}
  get isEmailValid() {
    this.setState({typing: false})
    const {usr_email} = this.state
    if (!this.state.usr_email || !this.utils.validateEmail(this.state.usr_email)) {
      this.setState({error: 'Email is invalid'}, e => this.alert('Error', this.error))
      return
    }
    this.setState({error: false})
    if (this.state.next) this.state.next.wrappedInstance.focus()
    return true
  }
  get isPasswordValid() {
    this.setState({typing: false})
    if (!this.state.usr_password && this.state.usr_password.length < 6) {
      this.setState({error: 'Password must have at least 6 characters'}, e => this.alert('Error', this.error))
      return
    }
    this.setState({error: false})
    if (this.state.next) this.state.next.wrappedInstance.focus()
    return true
  }
  get isNameValid() {
    this.setState({typing: false})
    if (!this.state.usr_name) {
      this.setState({error: 'Please enter your name'}, e => this.alert('Error', this.error))
      return
    }
    this.setState({error: false})
    if (this.state.next) this.state.next.wrappedInstance.focus()
    return true
  }
  get isMobileValid() {
    this.setState({typing: false})
    if (!this.state.usr_mobile) {
      this.setState({error: 'Please enter your phone number'}, e => this.alert('Error', this.error))
      return
    }
    this.setState({error: false})
    if (this.state.next) this.state.next.wrappedInstance.focus()
    return true
  }
  onPressSignUp() {
    if (this.isEmailValid && this.isPasswordValid && this.isNameValid && this.isMobileValid) {
      const {usr_email, usr_password, usr_name, usr_mobile} = this.state
      const pieces = usr_name.split(' ').filter(o => o),
        usr_fname = pieces.shift(),
        usr_lname = pieces.join(' ')
      this.actions.User_Register({usr_email, usr_password, usr_fname, usr_lname, usr_name})
      .then(e => this.props.onAfterSignUp ? this.props.onAfterSignUp(e) : false)
    }
  }
  render() {
    return <View m p>
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_email}
          ref={e => this.regEmailInput = e}
          onChangeText={e => this.setState({usr_email: e, typing: true, next: this.regPasswordInput})}
          autoCapitalize='none' autoCorrect={false} placeholder='Email'
          onSubmitEditing={e => this.isEmailValid}
          returnKeyType='next'/>
      </Item>
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_password}
          ref={e => this.regPasswordInput = e}
          onChangeText={e => this.setState({usr_password: e, typing: true, next: this.nameInput})}
          autoCapitalize='none' secureTextEntry={true} placeholder='Password'
          onSubmitEditing={this.onPressSignUp.bind(this)}
          returnKeyType='next'/>
      </Item>
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_name}
          ref={e => this.nameInput = e}
          onChangeText={e => this.setState({usr_name: e, typing: true, next: this.mobileInput})}
          autoCapitalize='none' placeholder='Your Name'
          onSubmitEditing={this.onPressSignUp.bind(this)}
          returnKeyType='next'/>
      </Item>
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_mobile}
          ref={e => this.mobileInput = e}
          onChangeText={e => this.setState({usr_mobile: e, typing: true, next: null})}
          autoCapitalize='none' placeholder='Phone Number'
          onSubmitEditing={this.onPressSignUp.bind(this)}
          returnKeyType='go'/>
      </Item>
      <Touch onPress={e => this.setState({agreed: !this.state.agreed})}><View horizontal middle m>
        <CheckBox checked={this.state.agreed} onPress={e => this.setState({agreed: !this.state.agreed})}/>
        <Text ml small>I agree with terms and conditions</Text>
      </View></Touch>
      <Button full smt disabled={!this.state.agreed || this.props.User.loading} onPress={this.onPressSignUp.bind(this)}>
        <Text bold>{this.message ? 'OK' : 'REGISTER'}</Text>
      </Button>
      <Button full smt horizontal facebook disabled={this.props.User.loading} onPress={this.props.onFacebookSignIn ? this.props.onFacebookSignIn.bind(this) : null}>
        <StyleProvider style={this.getTheme({iconFamily: 'MaterialCommunityIcons'})}><Icon white name='facebook'/></StyleProvider>
        <Text bold>Register with facebook</Text>
      </Button>
    </View>
  }
}
