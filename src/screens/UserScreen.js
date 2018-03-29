import React, {Component} from 'react'
import {Container, View, Content, Text, Tabs, Tab, Icon} from 'native-base'

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
  async onSavePaymentInfo(info) {
    await this.actions.PaymentInfo_Save(info)
  }
  async onLogout() {
    await this.actions.User_Logout()
    requestHeader('token', '')
    this.Actions.HomeScreen()
  }

  get account() {
    return [this.props.User.usr_fname, this.props.User.usr_lname].join(' ') || this.props.User.usr_email
  }

  renderHistorys() {
    return <View>{this.props.Historys.list.map(item => <History key={item.id} item={item}/>)}</View>
  }

  renderLoyaltys() {
    return <View>{this.props.Loyaltys.list.map(item => <Loyalty key={item.id} item={item}/>)}</View>
  }

  renderPaymentInfo() {
    return <PaymentInfo PaymentInfo={this.props.PaymentInfo} onSave={this.onSavePaymentInfo.bind(this)}/>
  }

  renderMe() {
    return <User User={this.props.User}
			onSave={this.onSaveMe.bind(this)}
			onSavePassword={this.onSavePassword.bind(this)}/>
  }

  render() {
    const user = this.props.User
    let source = user.avatar ? {uri: user.avatar} : PERSON_IMG
    return <Container>
      <Header back='back'/>
      <Content>
        <View horizontal start space-between>
          <View horizontal center>
            <View style={style.avatar_container}><Image source={source} style={style.avatar}/></View>
            <Text>{this.account}</Text>
          </View>
          <Button transparent theme onPress={this.onLogout.bind(this)}>
            {this.props.User.loading ? this.renderLoading() : <Icon theme name='ios-log-out'/>}
          </Button>
        </View>
        <Tabs {...style.tabsProps}>
          <Tab {...style.tabProps} heading='History'>
            {this.renderHistorys()}
          </Tab>
          <Tab {...style.tabProps} heading='Loyality'>
            {this.renderLoyaltys()}
          </Tab>
          <Tab {...style.tabProps} heading='Payment'>
            {this.renderPaymentInfo()}
          </Tab>
          <Tab {...style.tabProps} heading='Me'>
            {this.renderMe()}
          </Tab>
        </Tabs>
      </Content>
      <Footer/>
    </Container>
  }
}
