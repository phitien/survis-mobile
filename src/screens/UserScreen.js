import React, {Component} from 'react'
import {Container, View, Content, Text, Tabs, Tab, Icon} from 'native-base'

import {UserScreen as style} from '../../survis-themes/styles/screens'

import {CONFIG, PERSON_IMG} from '../constants'
import {setUser, setPaymentInfo, requestHeader} from '../utils'
import {Header, Footer, History, Loyalty, PaymentInfo, User} from '../containers'
import {Image, Button} from '../components'
import {Component as Screen} from '../components'

export class UserScreen extends Screen {
  state = {
    User: Object.assign({}, this.User),
  }

  async componentWillMount() {
    this.actions.Histories_Get()
    this.actions.Loyalties_Get()
    this.actions.PaymentInfo_Get()
  }

  renderHistories() {
    return <View>{this.props.Histories.list.map(item => <History item={item}/>)}</View>
  }

  renderLoyalties() {
    return <View>{this.props.Loyalties.list.map(item => <Loyalty item={item}/>)}</View>
  }

  changeUser(attribute, value) {
    const User = this.state.User
    User[attribute] = value
    this.setState({User, typing: true})
  }
  onSaveUser() {
    this.setState({savingUser: true})
    this.actions.User_Update(this.state.User)
  }

  async onSavePaymentInfo(info) {
    await this.actions.PaymentInfo_Load(info)
    await setPaymentInfo(info)
  }
  async onLogout() {
    await this.actions.User_Logout()
    await setUser(this.props.User.default)
    await setPaymentInfo(this.props.PaymentInfo.default)
    requestHeader('token', '')
    this.Actions.HomeScreen()
  }
  onSavePassword() {
    //TODO
  }

  renderPaymentInfo() {
    return <PaymentInfo item={this.props.PaymentInfo} onSave={this.onSavePaymentInfo.bind(this)}/>
  }

  renderPersonalInfo() {
    return <User item={this.state.User}
      editingUser={this.props.User.editingUser}
      editingPassword={this.props.User.editingPassword}
      onSave={this.onSavePaymentInfo.bind(this)}
      onSwitch={this.actions.PaymentInfo_EditShippingAddress}
      onSwitchPassword={this.actions.PaymentInfo_EditShippingAddress}/>
  }

  render() {
    let User = this.state.User
    let name = User.fname || User.email || 'Not set'
    let source = User.avatar ? {uri: User.avatar} : PERSON_IMG
    return <Container>
      <Header back='back'/>
      <Content>
        <View horizontal start space-between>
          <View horizontal center>
            <View style={style.avatar_container}><Image source={source} style={style.avatar}/></View>
            <Text>{name}</Text>
          </View>
          <Button transparent theme onPress={this.onLogout.bind(this)}>
            {this.props.User.loading ? this.renderLoading() : <Icon theme name='ios-log-out'/>}
          </Button>
        </View>
        <Tabs {...style.tabsProps}>
          <Tab {...style.tabProps} heading='Histories'>
            {this.renderHistories()}
          </Tab>
          <Tab {...style.tabProps} heading='Loyality'>
            {this.renderLoyalties()}
          </Tab>
          <Tab {...style.tabProps} heading='Payment'>
            {this.renderPaymentInfo()}
          </Tab>
          <Tab {...style.tabProps} heading='Me'>
            {this.renderPersonalInfo()}
          </Tab>
        </Tabs>
      </Content>
      <Footer/>
    </Container>
  }
}
