import React, {Component as RAComponent} from 'react'
import {Actions} from 'react-native-router-flux'
import {View, Spinner, Text} from 'native-base'
import {StyleSheet} from 'react-native'

import {PRIMARY} from '../constants'
import {apis} from '../apis'
import {requestHeaders, log} from '../utils'

const SpinnerStyle = StyleSheet.create({
  container: {
    flex: 1, width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  size: 0
})

export class Component extends RAComponent {
  state = {error: false, message: false}

  get api() {return api}
  get Actions() {return Actions}
  get currentScreen() {return this.Actions.currentScene.toString()}
  get open() {return (screen, params) => this.Actions[screen] ? this.Actions[screen](params): false}
  get actions() {return this.props.actions}
  get User() {return this.props.User && this.props.User.User || {}}
  get logged() {return this.User.token}
  get error() {return this.state.error}
  get message() {return this.state.message}
  get log() {return log}
  get refreshing() {return this.state.refreshing || false}
  set refreshing(v) {
    if (v) {
      this.setState({refreshing: v})
      setTimeout(e => this.setState({refreshing: false}), 2000)
    }
    else this.setState({refreshing: v})
  }

  refresh() {this.refreshing = true}

  locationUpdate(ok, ko) {
    navigator.geolocation
      .getCurrentPosition(position => {
        const {latitude, longitude} = position.coords || {}
        requestHeaders({latitude, longitude})
        this.actions.Location_Load({latitude, longitude})
        if (ok) {try{ok()}catch(e){this.log('locationUpdate', e)}}
      }, (error) => {
        this.setState({error: error.message})
        if (ko) {try{ko()}catch(e){this.log('locationUpdate', e)}}
      }, {
        enableHighAccuracy: true,
        timeout: 2000
      })
  }

  renderError() {
    return this.error ? <View center error key='error'><Text>{this.error}</Text></View> : null
  }
  renderMessage() {
    return this.message ? <View center message key='message'><Text>{this.message}</Text></View> : null
  }
  renderLoading() {
    return <View center key='loading' style={SpinnerStyle.container}>
      <Spinner color={PRIMARY} small/>
    </View>
  }
}
