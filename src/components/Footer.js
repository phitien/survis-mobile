import React from 'react'
import {Container, Header, Footer as NBFooter, FooterTab, Button, Text, View, Icon, Badge} from 'native-base'

import {Component} from './Component'

export class Footer extends Component {
  get klass() {return 'Footer'}
  onPressUser() {
    let currentScreen = this.currentScreen
    if (currentScreen !== 'UserScreen') {
      if (this.logged) {
        this.Actions.reset('UserScreen')
      }
      else {
        this.actions.Screen_Save({id: 'UserScreen'})
        this.open('LoginScreen')
      }
    }
  }
  onPressNotification() {
    let currentScreen = this.currentScreen
    if (currentScreen !== 'NotificationsScreen') {
      if (this.logged) {
        this.Actions.reset('NotificationsScreen')
      }
      else {
        this.actions.Screen_Save({id: 'NotificationsScreen'})
        this.open('LoginScreen')
      }
    }
  }
  openScreen(screen) {
    let currentScreen = this.currentScreen
    if (currentScreen !== screen) {
      this.actions.Category_Search({catid: null, current: null})
      .then(e => this.Actions.reset(screen))
    }
  }

  getIconStyle = (n) => ({color: this.currentScreen === n && this.cmpStyle.iconColorActive || this.cmpStyle.iconColor})
  renderTab(screen, icon, text, badge, onPress) {
    if (!onPress) onPress = this.openScreen.bind(this, screen)
	   if (badge) return <Button key={screen} vertical onPress={onPress}>
  	  <Icon name={icon} style={this.getIconStyle(screen)}/>
  	  <Text footer>{text}</Text>
      <Badge top-right style={{top: 0, right: '50%', marginRight: -12}}><Text>{badge}</Text></Badge>
  	</Button>
  	return <Button key={screen} vertical onPress={onPress}>
  	  <Icon name={icon} size={this.cmpStyle.iconSize} style={this.getIconStyle(screen)}/>
  	  <Text footer>{text}</Text>
  	</Button>
  }
  renderDefault() {
    const notifications = [].concat(this.props.Notification.Notifications.list).filter(o => o)
    return [
      this.renderTab('HomeScreen', 'md-home', 'Home', false),
      this.renderTab('PromotionsScreen', 'flower', 'Hot', false),
      this.renderTab('SearchScreen', 'md-pin', 'Nearby', false),
      this.renderTab('NotificationsScreen', 'md-notifications', 'Msg', this.logged && notifications.filter(o => o.is_read == 0).length, this.onPressNotification.bind(this)),
      this.renderTab('UserScreen', 'md-person', 'Me', false, this.onPressUser.bind(this))
    ]
  }
  render() {
    return <NBFooter style={this.cmpStyle.container}>
      <FooterTab>
        {this.props.children ? this.props.children : this.renderDefault()}
      </FooterTab>
    </NBFooter>
  }
}
