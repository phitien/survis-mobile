import React, {Component} from 'react'
import {Tabs, Tab, Item, Input, Text, View, Icon, CheckBox} from 'native-base'
import {StyleSheet} from 'react-native'
import {TouchableOpacity as Touch} from 'react-native'

import {LoginScreen as style} from '../theme/styles/screens'

import {validateEmail, requestHeader} from '../utils'
import {LightBox, Button} from '../components'
import {Screen} from '../components'

export class LoginScreen extends Screen {
  state = {
    agreed: false,
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

  onAfterLogin() {
    if (this.logged) {
      if (this.props.Screen.Screen.id) {
        requestHeader('token', this.User.token)
        this.Actions[this.props.Screen.Screen.id](this.props.Screen.Screen.params)
        this.actions.Screen_Save({id: '', params: {}})
      }
      else this.open('HomeScreen')
    }
  }
  onPressLogin() {
    if (this.isEmailValid && this.isPasswordValid) {
      const {usr_email, usr_password} = this.state
      this.actions.User_Login({usr_email, usr_password})
      .then(e => this.onAfterLogin(e))
    }
  }
  onPressRegister() {
    if (this.isEmailValid && this.isPasswordValid) {
      const {usr_email, usr_password} = this.state
      this.actions.User_Register({usr_email, usr_password})
    }
  }
  onPressForgetPassword() {
    //TODO
  }

  renderLogin() {
    return <View mt pt>
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
      {this.renderError()}
      <Button loading={this.props.User.loading} onPress={this.onPressLogin.bind(this)} full style={style.button}>
        <Text bold>LOG IN</Text>
      </Button>
      <View horizontal style={style.forget_password}>
        <Text onPress={this.onPressForgetPassword.bind(this)} small style={style.forget_password_text}>Forgot Password</Text>
      </View>
    </View>
  }

  renderRegister() {
    return <View mt pt>
      {this.renderError()}
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_email}
          ref={e => this.regEmailInput = e}
          onChangeText={e => this.setState({usr_email: e, typing: true, next: this.regPwdInput})}
          autoCapitalize='none' autoCorrect={false} placeholder='Email'
          onSubmitEditing={e => this.isEmailValid}
          returnKeyType='next'/>
      </Item>
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_password}
          ref={e => this.regPwdInput = e}
          onChangeText={e => this.setState({usr_password: e, typing: true, next: null})}
          autoCapitalize='none' secureTextEntry={true} placeholder='Password'
          onSubmitEditing={this.onPressRegister.bind(this)}
          returnKeyType='go'/>
      </Item>
      <Touch onPress={e => this.setState({agreed: !this.state.agreed})}><View horizontal middle m>
        <CheckBox checked={this.state.agreed}/>
        <Text ml small>I agree with terms and conditions</Text>
      </View></Touch>
      {this.renderError()}
      <Button full smt loading={this.props.User.loading} onPress={this.onPressRegister.bind(this)}>
        <Text bold>REGISTER</Text>
      </Button>
    </View>
  }

  render() {
    return <LightBox>
      <View flex1 bml bmr>
        <Tabs tabBarUnderlineStyle={style.tabBarUnderlineStyle}>
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
