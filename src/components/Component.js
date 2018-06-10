import React from 'react'
import {Actions} from 'react-native-router-flux'
import {View, Text} from 'native-base'
import {StyleSheet} from 'react-native'

import {Core} from './Core'
import {Spinner} from './Spinner'

export class Component extends Core {
  renderError() {
    return this.error ? <View center error key='error'><Text>{this.error}</Text></View> : null
  }
  renderMessage() {
    return this.message ? <View center message key='message'><Text>{this.message}</Text></View> : null
  }
  renderLoading() {
    return <View center key='loading' style={{
      flex: 1, width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Spinner small/>
    </View>
  }
}
