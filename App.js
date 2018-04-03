import React, {Component} from 'react'
import {AsyncStorage} from 'react-native'
import {Provider} from 'react-redux'
import {View, StyleProvider, Spinner} from 'native-base'
import OneSignal from 'react-native-onesignal'

import theme from './src/theme'
import AppStyle from './src/theme/styles/App'
import {Routes} from './src/routes'
import {PRIMARY} from './src/constants'
import {appstore} from './src/store'

export default class App extends Component {
  state = {
    store: null
  }

  async componentWillMount() {
    this.state.store = appstore()
    this.setState({loading: false})
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('ids', this.onIds)
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('ids', this.onIds)
  }

  onReceived(notification) {
    store.dispatch({type: 'Notification_Notifications'})
  }

  onOpened(openResult) {
  }

  onRegistered(notifData) {
  }

  onIds(device) {
  }

  render() {
    return <StyleProvider style={theme}>
      {!this.state.store ? <View style={AppStyle.container}><Spinner color={PRIMARY} style={AppStyle.spinner}/></View> :
      <Provider store={this.state.store}>
        <Routes store={this.state.store}/>
      </Provider>}
    </StyleProvider>
  }
}
