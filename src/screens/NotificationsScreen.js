import React, {Component} from 'react'
import {Container, View, Content, Text} from 'native-base'

import {NotificationsScreen as style} from '../theme/styles/screens'

import {Header, Footer, Notification} from '../containers'
import {Screen} from '../components'

export class NotificationsScreen extends Screen {
  get items() {return this.props.Notification.Notifications.list || []}
  async componentDidMount() {
    this.actions.Notification_Notifications()
  }
  loadmore() {
    if (!this.props.Notification.loading) {
      this.actions.Notification_Loadmore()
      .then(e => this.actions.Notification_Notifications())
    }
  }

  get content() {
    return [
      <View heading key='heading'><Text>Notifications</Text></View>,
      ...this.items.map((item,i) => <Notification index={i} item={item} key={`${i}-${item.id}`}/>)
    ]
  }
}
