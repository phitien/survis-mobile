import React from 'react'
import {Container, Header, Footer as NBFooter, FooterTab, Button, Text, View, Icon, Badge} from 'native-base'

import {Footer as style} from '../theme/styles/components'
const {iconSize, iconColorActive, iconColor} = style

import {Component} from './Component'

export class Footer extends Component {
  onPressUser() {
    let currentScene = this.Actions.currentScene.toString()
    if (currentScene !== 'UserScreen') {
      if (this.logged) {
        this.Actions.UserScreen()
      }
      else {
        this.actions.Screen_Save({id: 'UserScreen'})
        this.Actions.LoginScreen()
      }
    }
  }
  onPressNotification() {
    let currentScene = this.Actions.currentScene.toString()
    if (currentScene !== 'NotificationsScreen') {
      if (this.logged) {
        this.Actions.reset('NotificationsScreen')
      }
      else {
        this.actions.Screen_Save({id: 'NotificationsScreen'})
        this.Actions.LoginScreen()
      }
    }
  }
  openScreen(screen) {
    let currentScene = this.Actions.currentScene.toString()
    if (currentScene !== screen) {
      this.actions.Category_Reset()
      this.actions.Shop_SearchShops_Reset()
      this.Actions.reset(screen)
    }
  }

  getIconStyle = (n) => ({color: this.Actions.currentScene.toString() === n && iconColorActive || iconColor})
  renderTab(screen, icon, text, badge, onPress) {
    if (!onPress) onPress = this.openScreen.bind(this, screen)
	   if (badge) return <Button key={screen} vertical badge onPress={onPress}>
  	  <Badge><Text>{badge}</Text></Badge>
  	  <Icon name={icon} size={iconSize} style={this.getIconStyle(screen)}/>
  	  <Text footer>{text}</Text>
  	</Button>
  	return <Button key={screen} vertical onPress={onPress}>
  	  <Icon name={icon} size={iconSize} style={this.getIconStyle(screen)}/>
  	  <Text footer>{text}</Text>
  	</Button>
  }
  renderDefault() {
    return [
      this.renderTab('HomeScreen', 'home', 'Home', false),
      this.renderTab('PromotionsScreen', 'flower', 'Hot', false),
      this.renderTab('SearchScreen', 'ios-pin-outline', 'Nearby', false),
      this.renderTab('NotificationsScreen', 'ios-notifications', 'Msg', this.logged && this.props.Notification.Notifications.list.length, this.onPressNotification.bind(this)),
      this.renderTab('UserScreen', 'md-person', 'Me', false, this.onPressUser.bind(this))
    ]
  }
  render() {
    return <NBFooter style={style.container}>
      <FooterTab>
        {this.props.children ? this.props.children : this.renderDefault()}
      </FooterTab>
    </NBFooter>
  }
}
