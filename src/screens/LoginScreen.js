import React, {Component} from 'react'
import {Tabs, Tab, Item, Input, Text, View, Icon, CheckBox} from 'native-base'
import {StyleSheet} from 'react-native'

import {LoginScreen as style} from '../../survis-themes/styles/screens'

import {validateEmail, setUser} from '../utils'
import {LightBox, Button} from '../components'
import {Component as Screen} from '../components'

export class LoginScreen extends Screen {
  state = {
    usr_email: null,
    usr_password: null,
  }

  get error() {return !this.state.typing && this.props.User.error}
  get isEmailValid() {
    this.setState({typing: false})
    const {usr_email, usr_password} = this.state
    if (!this.state.usr_email || !validateEmail(this.state.usr_email)) {
      this.actions.User_Error('Email is invalid')
      return
    }
    this.actions.User_Error(false)
    if (this.state.next) this.state.next.wrappedInstance.focus()
    return true
  }
  get isPasswordValid() {
    this.setState({typing: false})
    if (!this.state.usr_password) {
      this.actions.User_Error('Password is invalid')
      return
    }
    this.actions.User_Error(false)
    if (this.state.next) this.state.next.wrappedInstance.focus()
    return true
  }

  async componentDidUpdate() {
    if (this.logged) {
      await setUser(this.props.User)
      if (this.props.Screen.redirect) this.Actions[this.props.Screen.redirect](this.props.Screen.params)
      else this.Actions.HomeScreen()
    }
  }

  onLogin() {
    if (this.isEmailValid && this.isPasswordValid) {
      const {usr_email, usr_password} = this.state
      this.actions.User_Login({usr_email, usr_password})
    }
  }

  onRegister() {
    if (this.isEmailValid && this.isPasswordValid) {
      const {usr_email, usr_password} = this.state
      this.actions.User_Register({usr_email, usr_password})
    }
  }

  renderError() {
    return this.error ? <Text style={style.error}>{this.error}</Text> : null
  }
  renderLogin() {
    return <View style={style.form}>
      <Text style={style.heading}>Email</Text>
      <Item login error={this.error}>
        <Input value={this.state.usr_email}
          ref={e => this.logEmailInput = e}
          onChangeText={e => this.setState({usr_email: e, typing: true, next: this.logPwdInput})}
          autoCapitalize={false} autoCorrect={false} placeholder='Email'
          onSubmitEditing={e => this.isEmailValid}
          returnKeyType='next'/>
      </Item>
      <Text style={style.heading}>Password</Text>
      <Item login error={this.error}>
        <Input value={this.state.usr_password}
          onChangeText={e => this.setState({usr_password: e, typing: true, next: null})}
          ref={e => this.logPwdInput = e}
          autoCapitalize={false} secureTextEntry={true} placeholder='Password'
          onSubmitEditing={this.onLogin.bind(this)}
          returnKeyType='go'/>
      </Item>
      {this.renderError()}
      <Button loading={this.props.User.loading} onPress={this.onLogin.bind(this)} full small style={style.button}>
        <Text bold>LOG IN</Text>
      </Button>
      <View horizontal style={style.forget_password}>
        <Text onPress={this.Actions.pop} small style={style.forget_password_text}>Forgot Password</Text>
      </View>
    </View>
  }

  renderRegister() {
    return <View style={style.form}>
      {this.renderError()}
      <Text style={style.heading}>Email</Text>
      <Item login error={this.error}>
        <Input value={this.state.usr_email}
          ref={e => this.regEmailInput = e}
          onChangeText={e => this.setState({usr_email: e, typing: true, next: this.regPwdInput})}
          autoCapitalize='none' autoCorrect={false} placeholder='Email'
          onSubmitEditing={e => this.isEmailValid}
          returnKeyType='next'/>
      </Item>
      <Text style={style.heading}>Password</Text>
      <Item login error={this.error}>
        <Input value={this.state.usr_password}
          onChangeText={e => this.setState({usr_password: e, typing: true, next: null})}
          ref={e => this.regPwdInput = e}
          autoCapitalize='none' secureTextEntry={true} placeholder='Password'
          onSubmitEditing={this.onRegister.bind(this)}
          returnKeyType='go'/>
      </Item>
      <View horizontal style={style.agree}>
        <CheckBox style={style.checkbox}/>
        <Text small>I agree with terms and conditions</Text>
      </View>
      {this.renderError()}
      <Button loading={this.props.User.loading} onPress={this.onRegister.bind(this)} full small style={style.button}>
        <Text bold>REGISTER</Text>
      </Button>
    </View>
  }

  render() {
    return <LightBox>
      <View style={style.container}>
        <Tabs tabBarUnderlineStyle={style.tabBarUnderlineStyle} activeTextColor={style.activeTextColor}>
          <Tab heading='Login'>
            {this.renderLogin()}
          </Tab>
          <Tab heading='Register'>
            {this.renderRegister()}
          </Tab>
        </Tabs>
      </View>
    </LightBox>
  }
}
