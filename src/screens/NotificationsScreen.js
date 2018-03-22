import React, {Component} from 'react'
import {Container, View, Content, Text} from 'native-base'
import {ScrollView} from 'react-native'

import {NotificationsScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer, Notification} from '../containers'
import {Component as Screen} from '../components'

export class NotificationsScreen extends Screen {
  async componentDidMount() {
    this.actions.Notifications_Get()
  }
  loadmore() {
    this.actions.Notifications_Loadmore()
    this.actions.Notifications_Get()
  }

  render() {
    return <Container>
      <Header/>
      <Content>
        <View horizotal style={style.heading}>
          <Text bold fs16>Notifications</Text>
        </View>
        <ScrollView>
          {this.props.Notifications.list.map(item => <Notification item={item}/>)}
        </ScrollView>
      </Content>
      <Footer/>
    </Container>
  }
}
