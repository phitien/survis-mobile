import React, {Component} from 'react'
import {Container, View, Content, Text, Tabs, Tab, Icon} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {PERSON_IMG} from '../constants'
import {requestHeader} from '../utils'
import {Header, Footer, Historys, Loyaltys, Luckys, User} from '../containers'
import {Image, Button} from '../components'
import {Screen} from '../components'

export class UserScreen extends Screen {
  get klass() {return 'UserScreen'}

  async componentDidMount() {
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
    this.utils.requestHeader('token', '')
    this.open('HomeScreen')
    this.actions.User_Logout()
  }
  refresh() {
    this.refreshing = true
    // this.tabHistory.refresh()
    // this.tabLoyality.refresh()
  }

  get content() {
    const user = this.User
    let source = user.avatar ? {uri: user.avatar} : PERSON_IMG
    const {email, fullname} = this.utils.itemHelper(this.User)
    return [
      <View tart space-between fullW p key='info'>
        <View horizontal>
          <View small-size-rounded><Image source={source}/></View>
          <View smt ml full>
            <Text small bold full>{`Hello: ${fullname}`}</Text>
            <Text small italic full>{email}</Text>
          </View>
        </View>
        <View top-right>
          <Touch onPress={this.onLogout.bind(this)}>
            <View icon-btn-size-square center middle><Icon theme name='ios-log-out'/></View>
          </Touch>
        </View>
      </View>,
      <Tabs tabBarUnderlineStyle={this.cmpStyle.tabBarUnderlineStyle} locked={true} key='detail'>
        <Tab heading='Me'><User ref={e => this.tabMe = e} User={this.User}
    			onSave={this.onSaveMe.bind(this)}
    			onSavePassword={this.onSavePassword.bind(this)}
        /></Tab>
        <Tab heading='Lucky'><Luckys ref={e => this.tabLuckys = e}/></Tab>
        <Tab heading='History'><Historys ref={e => this.tabHistory = e}/></Tab>
        <Tab heading='Loyality'><Loyaltys ref={e => this.tabLoyality = e}/></Tab>
      </Tabs>
    ]
  }
}
