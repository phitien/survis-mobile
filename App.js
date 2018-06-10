import React, {Component} from 'react'
import {AsyncStorage} from 'react-native'
import {Provider} from 'react-redux'
import {View, StyleProvider} from 'native-base'
import OneSignal from 'react-native-onesignal'

import theme from './src/theme'
import appStyle from './src/styles/App'
import {Routes} from './src/routes'
import {actions} from './src/actions'
import {PRIMARY} from './src/constants'
import {appstore} from './src/store'
import {Spinner} from './src/components'

export default class App extends Component {
  state = {store: null}
  actions = actions

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

  onReceived = notification => {
    this.actions.Notification_Notifications()
    // this.state.store.dispatch({type: 'Notification_Notifications'})
  }
  onOpened = openResult => {}
  onRegistered = notifData => {}
  onIds = device => {}

  render() {
    return <StyleProvider style={theme}>
      {!this.state.store ? <View style={appStyle}><Spinner/></View> :
      <Provider store={this.state.store}>
        <Routes store={this.state.store}/>
      </Provider>}
    </StyleProvider>
  }
}
