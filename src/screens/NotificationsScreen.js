import React, {Component} from 'react'
import {Container, View, Content, Text} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {Header, Footer, Notification} from '../containers'
import {Screen} from '../components'

export class NotificationsScreen extends Screen {
  get klass() {return 'NotificationsScreen'}
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

  onPressItem(item, i) {
    if (item.is_read == 0) {
      this.actions.Notification_Read({id: item.id})
    }
  }

  get content() {
    return [
      <View heading key='heading'><Text>Notifications</Text></View>,
      ...this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={this.onPressItem.bind(this, item, i)}>
        <Notification item={item} index={i}/>
      </Touch>)
    ]
  }
}
