import React from 'react'
import {TouchableOpacity as Touch} from 'react-native'
import {Alert} from 'react-native'
import {Tabs, Tab, Item, Input, Text, View, Icon, CheckBox} from 'native-base'
import {StyleProvider} from 'native-base'

import {getTheme} from '../theme'
import {validateEmail, requestHeader} from '../utils'
import {Button} from './Button'
import {Component} from './Component'

export class SignUpForm extends Component {
  get error() {return this.props.User.error || this.state.error}
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
  onPressSignUp() {
    if (this.isEmailValid && this.isPasswordValid) {
      const {usr_email, usr_password} = this.state
      this.actions.User_Register({usr_email, usr_password})
      .then(e => this.props.onAfterSignUp ? this.props.onAfterSignUp(e) : false)
    }
  }
  render() {
    return <View m p>
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
        <StyleProvider style={getTheme({iconFamily: 'MaterialCommunityIcons'})}><Icon white name='facebook'/></StyleProvider>
        <Text bold>Register with facebook</Text>
      </Button>
    </View>
  }
}
