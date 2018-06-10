import React, {Component} from 'react'
import {Container, View, Content} from 'native-base'
import {RNCamera} from 'react-native-camera'

import {QrScanScreen as style} from '../theme/styles/screens'

import {Header, Footer} from '../containers'
import {Screen} from '../components'

export class QrScanScreen extends Screen {
  showError = error => this.alert('Error', error, [{text: 'OK', onPress: e => {
    this.actions.Prize_Clear()
    .then(e => this.setState({loading: false}))
  }}], {cancelable: false})
  onBarCodeRead(code) {
    if (this.state.loading) return
    this.setState({loading: true})
    let data = null
    try {data = JSON.parse(code.data)} catch(e) {}
    if (data && data.code && data.name) {
      this.actions.Prize_Scan(data)
      .then(res => {
        if (!this.props.Prize.error) {
          this.actions.Prize_Clear()
          .then(e => this.open('PrizesScreen'))
        }
        else this.showError(this.props.Prize.error)
      })
    }
    else this.showError('Wrong qr code')
  }

  renderScanner() {
    return <RNCamera key='main' ref={ref => {this.camera = ref}}
      onBarCodeRead={this.onBarCodeRead.bind(this)}
      style={style.scanningFrame}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      permissionDialogTitle={'Permission to use camera'}
      permissionDialogMessage={'We need your permission to use your camera phone'}/>
  }
  get content() {
    return this.renderScanner()
  }
}
