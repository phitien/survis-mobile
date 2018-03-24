import React, {Component as RAComponent} from 'react'
import {Actions} from 'react-native-router-flux'
import {View, Spinner, Text} from 'native-base'
import {StyleSheet} from 'react-native'

import {PRIMARY} from '../constants'
import {apis} from '../apis'
import {requestHeaders} from '../utils'

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
  get PaymentInfo() {return [].concat(this.props.PaymentInfo.list)[0] || {}}
  get User() {return this.props.User || {}}
  get logged() {return this.User.token}
  get error() {return this.state.error}

  locationUpdate(ok, ko) {
    navigator
      .geolocation
      .getCurrentPosition(position => {
        const {latitude, longitude} = position.coords || {}
        this.actions.Location_Update({latitude, longitude})
        requestHeaders({latitude, longitude})
        if (ok) ok()
      }, (error) => {
        this.setState({error: error.message})
        if (ko) ko()
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
