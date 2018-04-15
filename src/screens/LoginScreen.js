import React, {Component} from 'react'
import {Tabs, Tab, Item, Input, Text, View, Icon, CheckBox} from 'native-base'
import {Alert} from 'react-native'
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

  get error() {return this.props.User.error || this.state.error}
  get message() {return this.props.User.message}
  get isEmailValid() {
    this.setState({typing: false})
    const {usr_email, usr_password} = this.state
    if (!this.state.usr_email || !validateEmail(this.state.usr_email)) {
      this.setState({error: 'Email is invalid'}, e => Alert.alert('Error', this.error))
      return
    }
    this.setState({error: false})
    if (this.state.next) this.state.next.wrappedInstance.focus()
    return true
  }
  get isPasswordValid() {
    this.setState({typing: false})
    if (!this.state.usr_password) {
      this.setState({error: 'Password is invalid. Password should not be empty'}, e => Alert.alert('Error', this.error))
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
      .then(e => this.onAfterLogin(e))
    }
  }
  onAfterLogin(res) {
    if (!this.error) {
      if (this.props.Screen.Screen.id) {
        requestHeader('token', this.User.token)
        this.Actions[this.props.Screen.Screen.id](this.props.Screen.Screen.params)
        this.actions.Screen_Save({id: '', params: {}})
      }
      else this.open('HomeScreen')
    }
    else {
      Alert.alert('Error', this.error)
    }
  }
  onPressRegister() {
    if (this.isEmailValid && this.isPasswordValid) {
      const {usr_email, usr_password} = this.state
      this.actions.User_Register({usr_email, usr_password})
      .then(e => this.onAfterRegister(e))
    }
  }
  onAfterRegister() {
    if (this.error) Alert.alert('Error', this.error)
    else if (this.message) {
      Alert.alert('Message', this.message, [{text: 'OK', onPress: () => {
        this.actions.User_Clear()
        this.tabs.goToPage(0)
        // this.Actions.pop()
      }}], {cancelable: false})
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
      <Button full bmt loading={this.props.User.loading} onPress={this.onPressLogin.bind(this)}>
        <Text bold>LOG IN</Text>
      </Button>
      <View horizontal full mt>
        {/* <Text full small theme right onPress={this.onPressForgetPassword.bind(this)}>Forgot Password</Text> */}
      </View>
    </View>
  }

  renderRegister() {
    return <View mt pt>
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_email}
          ref={e => this.regEmailInput = e}
          onChangeText={e => {
            this.setState({usr_email: e, typing: true, next: this.regPwdInput})
            // this.isEmailValid
          }}
          autoCapitalize='none' autoCorrect={false} placeholder='Email'
          onSubmitEditing={e => this.isEmailValid}
          returnKeyType='next'/>
      </Item>
      <Item login error={this.error ? true : false}>
        <Input value={this.state.usr_password}
          ref={e => this.regPwdInput = e}
          onChangeText={e => {
            this.setState({usr_password: e, typing: true, next: null})
            // this.isPasswordValid
          }}
          autoCapitalize='none' secureTextEntry={true} placeholder='Password'
          onSubmitEditing={this.onPressRegister.bind(this)}
          returnKeyType='go'/>
      </Item>
      <Touch onPress={e => this.setState({agreed: !this.state.agreed})}><View horizontal middle m>
        <CheckBox checked={this.state.agreed} onPress={e => this.setState({agreed: !this.state.agreed})}/>
        <Text ml small>I agree with terms and conditions</Text>
      </View></Touch>
      <Button full smt disabled={!this.state.agreed} loading={this.props.User.loading} onPress={this.onPressRegister.bind(this)}>
        <Text bold>{this.message ? 'OK' : 'REGISTER'}</Text>
      </Button>
    </View>
  }

  render() {
    return <LightBox>
      <View flex1 bml bmr bmt bpt>
        <Tabs ref={e => this.tabs = e}
          // initialPage={0} page={0}
          tabBarUnderlineStyle={style.tabBarUnderlineStyle}>
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
