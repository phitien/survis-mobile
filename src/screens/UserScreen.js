import React, {Component} from 'react'
import {Container, View, Content, Text, Tabs, Tab, Icon} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {UserScreen as style} from '../theme/styles/screens'

import {PERSON_IMG} from '../constants'
import {requestHeader} from '../utils'
import {Header, Footer, Historys, Loyaltys, PaymentInfo, User} from '../containers'
import {Image, Button} from '../components'
import {Screen} from '../components'

export class UserScreen extends Screen {

  async componentWillMount() {
		this.actions.User_User()
  }
  async onSaveMe(user) {
		await this.actions.User_Save(user)
    await this.actions.User_Update(user)
  }
	async onSavePassword(password) {
    await this.actions.User_ChangePassword({usr_password: password})
  }
  async onLogout() {
    requestHeader('token', '')
    this.Actions.HomeScreen()
    this.actions.User_Logout()
  }

  get account() {return [this.User.usr_fname, this.User.usr_lname].join(' ') || ''}
  get email() {return this.User.usr_email}

  renderMe() {
    return <User User={this.User}
			onSave={this.onSaveMe.bind(this)}
			onSavePassword={this.onSavePassword.bind(this)}/>
  }

  get content() {
    const user = this.User
    let source = user.avatar ? {uri: user.avatar} : PERSON_IMG
    return [
      <View tart space-between fullW p key='info'>
        <View horizontal>
          <View small-size-rounded><Image source={source}/></View>
          <View smt ml full>
            <Text small bold full>{this.account || 'Not set'}</Text>
            <Text small italic full>{this.email || 'Not set'}</Text>
          </View>
        </View>
        <View top-right>
          <Touch onPress={this.onLogout.bind(this)}>
            <View icon-btn-size-square center middle><Icon theme name='ios-log-out'/></View>
          </Touch>
        </View>
      </View>,
      <Tabs tabBarUnderlineStyle={style.tabBarUnderlineStyle} locked={true} key='detail'>
        <Tab heading='Me'>{this.renderMe()}</Tab>
        <Tab heading='Payment'><PaymentInfo/></Tab>
        <Tab heading='History'><Historys/></Tab>
        <Tab heading='Loyality'><Loyaltys/></Tab>
      </Tabs>
    ]
  }
}
