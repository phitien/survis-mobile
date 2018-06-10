import React from 'react'
import {Tabs, Tab, Item, Input, Text, View, Icon, CheckBox} from 'native-base'
import {StyleProvider} from 'native-base'

import {Button} from './Button'
import {Component} from './Component'

export class SignInForm extends Component {
  state = {
    agreed: false,
    usr_email: null,
    usr_password: null,
  }
  get error() {return this.props.User.error || this.state.error}
  get isEmailValid() {
    this.setState({typing: false})
    const {usr_email, usr_password} = this.state
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
    if (!this.state.usr_password) {
      this.setState({error: 'Password is invalid. Password should not be empty'}, e => this.alert('Error', this.error))
      return
    }
    this.setState({error: false})
    if (this.state.next) this.state.next.wrappedInstance.focus()
    return true
  }
  onPressLogin() {
    if (this.isEmailValid && this.isPasswordValid) {
      const {usr_email, usr_password} = this.state
      this.actions.User_Login({usr_email, usr_password})
      .then(e => this.props.onAfterSignIn ? this.props.onAfterSignIn(e) : false)
    }
  }
  render() {
    return <View m p>
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_email}
          ref={e => this.logEmailInput = e}
          onChangeText={e => this.setState({usr_email: e, typing: true, next: this.logPwdInput})}
          autoCapitalize='none' autoCorrect={false} placeholder='Email'
          onSubmitEditing={e => this.isEmailValid}
          returnKeyType='next'/>
      </Item>
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_password}
          ref={e => this.logPwdInput = e}
          onChangeText={e => this.setState({usr_password: e, typing: true, next: null})}
          autoCapitalize='none' secureTextEntry={true} placeholder='Password'
          onSubmitEditing={this.onPressLogin.bind(this)}
          returnKeyType='go'/>
      </Item>
      <Button full bmt disabled={this.props.User.loading} onPress={this.onPressLogin.bind(this)}>
        <Text bold>LOG IN</Text>
      </Button>
      <Button full smt horizontal facebook disabled={this.props.User.loading} onPress={this.props.onFacebookSignIn ? this.props.onFacebookSignIn.bind(this) : null}>
        <StyleProvider style={this.getTheme({iconFamily: 'MaterialCommunityIcons'})}><Icon white name='facebook'/></StyleProvider>
        <Text bold>Log in with facebook</Text>
      </Button>
      <View horizontal full mt>
        {/* <Text full small theme right onPress={this.onPressForgetPassword.bind(this)}>Forgot Password</Text> */}
      </View>
    </View>
  }
}
