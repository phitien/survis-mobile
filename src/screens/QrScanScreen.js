import React, {Component} from 'react'
import {Container, View, Content, Spinner} from 'native-base'
import {RNCamera} from 'react-native-camera'

import {QrScanScreen as style} from '../theme/styles/screens'

import {Header, Footer} from '../containers'
import {Screen} from '../components'

export class QrScanScreen extends Screen {
  get error() {return this.state.error || this.props.Prize.error}

  onBarCodeRead(code) {
    let data = null
    try {data = JSON.parse(code.data)} catch(e) {}
    if (data && data.code && data.name) {
      this.setState({error: false})
      if (!this.props.Prize.loading) this.actions.Prize_Scan(data)
      .then(res => {
        if (!this.props.Prize.error) {
          this.open('PrizesScreen')
        }
      })
    }
    else this.setState({error: 'Wrong qr code'})
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
    return [
      this.renderError(),
      this.renderScanner()
    ]
  }
}
