import React, {Component} from 'react'
import {Container, View, Content, Text, Tabs, Tab, Icon} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {UserScreen as style} from '../theme/styles/screens'

import {PERSON_IMG} from '../constants'
import {requestHeader} from '../utils'
import {Header, Footer, History, Loyalty, PaymentInfo, User} from '../containers'
import {Image, Button} from '../components'
import {Component as Screen} from '../components'

export class UserScreen extends Screen {

  async componentWillMount() {
    this.actions.History_Historys()
    this.actions.Loyalty_Loyaltys()
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

  renderHistorys() {
    return <View>{this.props.History.Historys.list.map(item => <History key={item.id} item={item}/>)}</View>
  }

  renderLoyaltys() {
    return <View>{this.props.Loyalty.Loyaltys.list.map(item => <Loyalty key={item.id} item={item}/>)}</View>
  }

  renderPaymentInfo() {
    return <PaymentInfo/>
  }

  renderMe() {
    return <User User={this.User}
			onSave={this.onSaveMe.bind(this)}
			onSavePassword={this.onSavePassword.bind(this)}/>
  }

  render() {
    const user = this.User
    let source = user.avatar ? {uri: user.avatar} : PERSON_IMG
    return <Container>
      <Header back='back'/>
      <Content>
        <View tart space-between fullW p>
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
        </View>
        <Tabs tabBarUnderlineStyle={style.tabBarUnderlineStyle}>
          <Tab heading='History'>
            {this.renderHistorys()}
          </Tab>
          <Tab heading='Loyality'>
            {this.renderLoyaltys()}
          </Tab>
          <Tab heading='Payment'>
            {this.renderPaymentInfo()}
          </Tab>
          <Tab heading='Me'>
            {this.renderMe()}
          </Tab>
        </Tabs>
      </Content>
      <Footer/>
    </Container>
  }
}
