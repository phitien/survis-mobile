import React, {Component} from 'react'
import {Container, View, Content, Text, Tabs, Tab, Icon} from 'native-base'

import {UserScreen as style} from '../../survis-themes/styles/screens'

import {CONFIG, PERSON_IMG} from '../constants'
import {setUser, setPaymentInfo, requestHeader} from '../utils'
import {Header, Footer, History, Loyalty, PaymentInfo, User} from '../containers'
import {Image, Button} from '../components'
import {Component as Screen} from '../components'

export class UserScreen extends Screen {

  async componentWillMount() {
    this.actions.Histories_Get()
    this.actions.Loyalties_Get()
		this.actions.User_Get()
  }
  async onSaveMe(user) {
		await setUser({...this.props.User, ...user})
		await this.actions.User_Load(user)
    await this.actions.User_Update(user)
  }
	async onSavePassword(password) {
    await this.actions.User_ChangePassword({usr_password: password})
  }
  async onSavePaymentInfo(info) {
		await setPaymentInfo({...this.props.PaymentInfo, ...info})
    await this.actions.PaymentInfo_Load(info)
  }
  async onLogout() {
    await this.actions.User_Logout()
    await setUser(this.props.User.default)
    // await setPaymentInfo(this.props.PaymentInfo.default)
    requestHeader('token', '')
    this.Actions.HomeScreen()
  }

  get account() {
    return [this.props.User.usr_fname, this.props.User.usr_lname].join(' ') || this.props.User.usr_email
  }

  renderHistories() {
    return <View>{this.props.Histories.list.map(item => <History key={item.id} item={item}/>)}</View>
  }

  renderLoyalties() {
    return <View>{this.props.Loyalties.list.map(item => <Loyalty key={item.id} item={item}/>)}</View>
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
            {this.renderHistories()}
          </Tab>
          <Tab {...style.tabProps} heading='Loyality'>
            {this.renderLoyalties()}
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
