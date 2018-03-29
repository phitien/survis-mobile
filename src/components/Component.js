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
  spinner: {

  }
})

export class Component extends RAComponent {
  state = {error: false, message: false}

  get api() {return api}
  get Actions() {return Actions}
  get actions() {return this.props.actions}
  get User() {return this.props.User && this.props.User.User || {}}
  get logged() {return this.User.token}
  get error() {return this.state.error}
  get log() {return log}

  locationUpdate(ok, ko) {
    navigator
      .geolocation
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
        timeout: 20000,
        maximumAge: 1000
      })
  }

  renderError() {
    return this.error ? <View center><Text red small center>{this.error}</Text></View> : null
  }
  renderLoading() {
    return <View center style={SpinnerStyle.container}>
      <Spinner color={PRIMARY} style={SpinnerStyle.spinner}/>
    </View>
  }
}
