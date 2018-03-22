import React, {Component} from 'react'
import {Container, View, Content, Button, Text, Tabs, Tab, Icon} from 'native-base'

import {UserScreen as style} from '../../survis-themes/styles/screens'

import {CONFIG, PERSON_IMG} from '../constants'
import {Header, Footer, History, Loyalty, PaymentInfo, User} from '../containers'
import {Image} from '../components'
import {Component as Screen} from '../components'

const {tabsProps, tabProps} = style

export class UserScreen extends Screen {
  state = {
    User: Object.assign({}, this.User),
    PaymentInfo: Object.assign({}, this.PaymentInfo)
  }

  async omponentWillMount() {
    this.actions.Histories_Get()
    this.actions.Loyalties_Get()
    this.actions.PaymentInfo_Get()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      User: Object.assign(this.state.User, nextProps.User)
    })
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

  onSavePaymentInfo() {
    this.actions.PaymentInfo_Update(Object.keys(this.state.PaymentInfo).reduce((rs,k) => {
      rs[`ucc_${k}`] = this.state.PaymentInfo[k]
      return rs
    }, {}))
  }

  onSavePassword() {
    //TODO
  }

  renderPaymentInfo() {
    return <PaymentInfo item={this.state.PaymentInfo} onSave={this.onSavePaymentInfo.bind(this)}/>
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
        <View horizontal center>
          <Image source={source} style={style.avatar}/>
          <Text>{name}</Text>
          <Button transparent='transparent' onPress={e => this.actions.User_Logout()} style={style.logoutIcon}>
            <Icon name='ios-log-out'/>
          </Button>
        </View>
        <Tabs {...tabsProps}>
          <Tab {...tabProps} heading='Histories'>
            {this.renderHistories()}
          </Tab>
          <Tab {...tabProps} heading='Loyality'>
            {this.renderLoyalties()}
          </Tab>
          <Tab {...tabProps} heading='Payment'>
            {this.renderPaymentInfo()}
          </Tab>
          <Tab {...tabProps} heading='Me'>
            {this.renderPersonalInfo()}
          </Tab>
        </Tabs>
      </Content>
      <Footer/>
    </Container>
  }
}
