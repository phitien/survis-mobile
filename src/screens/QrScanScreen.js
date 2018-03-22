import React, {Component} from 'react'
import {Container, View, Content, Spinner} from 'native-base'
// import {RNCamera} from 'react-native-camera'

import {QrScanScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer} from '../containers'
import {Component as Screen} from '../components'

export class QrScanScreen extends Screen {
  onBarCodeRead(e) {
    this.Actions.replace('PrizesScreen', {qrcode: e})
  }
  render() {
    return (<Container>
      <Header/>
      <Content center contentContainerStyle={style.container}>
        <RNCamera ref={ref => {this.camera = ref}}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            style={style.scanningFrame}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}/>
      </Content>
      <Footer/>
    </Container>)
  }
}
