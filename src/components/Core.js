import React, {Component as RAComponent} from 'react'
import {Actions} from 'react-native-router-flux'
import {RefreshControl} from 'react-native'
import {Alert} from 'react-native'
import {apis} from '../apis'
import * as utils from '../utils'
import {getTheme} from '../theme'

const {requestHeaders, log} = utils

export class Core extends RAComponent {
  state = {error: false, message: false}

  get getTheme() {return getTheme}
  get cmpStyle() {}

  get api() {return api}
  get Actions() {return Actions}
  get alert() {return Alert.alert}
  get utils() {return utils}
  get currentScreen() {return this.Actions.currentScene.toString()}
  get open() {return (screen, params) => this.Actions[screen] ? this.Actions[screen](params): false}
  get push() {return (screen, params) => this.Actions.push(screen, params)}
  get actions() {return this.props.actions}
  get User() {return this.props.User && this.props.User.User || {}}
  get logged() {return this.User.token}
  get error() {return this.state.error}
  get message() {return this.state.message}
  get log() {return log}
  get refreshControl() {return <RefreshControl
    refreshing={this.refreshing}
    onRefresh={this.refresh.bind(this)}
  />}
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
}
