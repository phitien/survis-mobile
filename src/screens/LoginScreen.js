import React, {Component} from 'react'
import {Tabs, Tab, Item, Input, Text, View, Icon, CheckBox} from 'native-base'
import {Alert} from 'react-native'
import FBSDK, {LoginManager, LoginButton, AccessToken, GraphRequest, GraphRequestManager} from 'react-native-fbsdk'

import {LoginScreen as style} from '../theme/styles/screens'

import {requestHeader} from '../utils'
import {SignInForm, SignUpForm} from '../containers'
import {Screen} from '../components'

export class LoginScreen extends Screen {
  get error() {return this.props.User.error || this.state.error}
  get message() {return this.props.User.message}

  onAfterSignIn(res) {
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
  onAfterSignUp() {
    if (this.error) Alert.alert('Error', this.error)
    else if (this.message) {
      Alert.alert('Message', this.message, [{text: 'OK', onPress: () => {
        this.actions.User_Clear()
        this.tabs.goToPage(0)
      }}], {cancelable: false})
    }
  }

  onFacebookSignIn() {
    const showError = e => {
      alert('Login fail with error: ' + e.toString())
    }
    const getInfo = e => {
      AccessToken.getCurrentAccessToken().then(
        data => {
          const token = data.accessToken
          if (token) {
            const infoRequest = new GraphRequest(
              '/me?fields=email,name,picture',
              null,
              (err, result) => {
                if (err) showError(err)
                else {
                  const usr_email = result.email, usr_name = result.name, usr_avatar = result.picture.data.url,
                    usr_facebook = result.id
                  this.actions.User_Login({usr_email, usr_name, usr_avatar, usr_facebook, token})
                  .then(e => this.onAfterSignIn(e))
                }
              }
            )
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
          }
          else showError('Access denied')
        }
      )
    }
    const logIn = e => LoginManager.logInWithReadPermissions(['public_profile']).then(
      res => !res.isCancelled ? getInfo() : false,
      showError
    )
    logIn()
  }
  onPressForgetPassword() {
    //TODO
  }

  renderLogin() {
    return <SignInForm
      onAfterSignIn={this.onAfterSignIn.bind(this)}
      onFacebookSignIn={this.onFacebookSignIn.bind(this)}
    />
  }

  renderRegister() {
    return <SignUpForm
      onAfterSignUp={this.onAfterSignUp.bind(this)}
      onFacebookSignIn={this.onFacebookSignIn.bind(this)}
    />
  }

  renderContent() {
    return <View flex1>
      <Tabs ref={e => this.tabs = e}
        tabBarUnderlineStyle={style.tabBarUnderlineStyle}>
        <Tab heading='Login'>
          {this.renderLogin()}
        </Tab>
        <Tab heading='Register'>
          {this.renderRegister()}
        </Tab>
      </Tabs>
    </View>
  }
}
