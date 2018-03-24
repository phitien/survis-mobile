import React, {Component} from 'react'
import {AsyncStorage} from 'react-native'
import {Provider} from 'react-redux'
import {View, StyleProvider, Spinner} from 'native-base'
import OneSignal from 'react-native-onesignal'

import getTheme from './survis-themes/components'
import AppStyle from './survis-themes/styles/App'
import {Routes} from './src/routes'
import {getUser, setUser, requestHeader} from './src/utils'
import {PRIMARY} from './src/constants'
import {appstore} from './src/store'

export default class App extends Component {
  state = {
    store: null
  }

  onOneSignalNotiReceived(notification) {
    console.log('Notification received: ', notification)
  }

  async componentDidMount() {
    if (typeof Expo !== 'undefined') {
      await Expo
        .Font
        .loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
          FontAwesome: require('@expo/vector-icons/fonts/FontAwesome.ttf'),
          MaterialCommunityIcons: require('@expo/vector-icons/fonts/MaterialCommunityIcons.ttf'),
          MaterialIcons: require('@expo/vector-icons/fonts/MaterialIcons.ttf')
        })
    }
    await OneSignal.addEventListener('received', this.onOneSignalNotiReceived)
    this.state.store = appstore()
    let deviceId = -1
    try {
      if(Expo.Constants.appOwnership == 'expo') {
          deviceId = Expo.Constants.deviceId
      }
      else {
        var DeviceInfo = require('react-native-device-info')
        const deviceId = await DeviceInfo.getDeviceId()
      }
    }
    catch(e) {
      console.log(e)
    }
    requestHeader('deviceId', deviceId)
    this.setState({loading: false})
  }

  render() {
    return <StyleProvider style={getTheme()}>
      {!this.state.store ? <View style={AppStyle.container}><Spinner color={PRIMARY} style={AppStyle.spinner}/></View> :
      <Provider store={this.state.store}>
        <Routes store={this.state.store}/>
      </Provider>}
    </StyleProvider>
  }
}
