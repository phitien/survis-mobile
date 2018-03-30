import React, {Component} from 'react'
import {Container, View, Content, Text} from 'native-base'

import {NotificationsScreen as style} from '../theme/styles/screens'

import {Header, Footer, Notification} from '../containers'
import {Component as Screen} from '../components'

export class NotificationsScreen extends Screen {
  async componentDidMount() {
    this.actions.Notification_Notifications()
  }
  loadmore() {
    if (!this.props.Notification.loading) {
      this.actions.Notification_Loadmore()
      .then(e => this.actions.Notification_Notifications())
    }
  }

  render() {
    return <Container>
      <Header/>
      <Content>
        <View heading><Text>Notifications</Text></View>
        {this.props.Notification.Notifications.list.map((item,i) => <Notification key={i} index={i} item={item}/>)}
      </Content>
      <Footer/>
    </Container>
  }
}
