import React, {Component} from 'react'
import {Container, View, Content, Spinner} from 'native-base'
import {RNCamera} from 'react-native-camera'

import {QrScanScreen as style} from '../theme/styles/screens'

import {Header, Footer} from '../containers'
import {Component as Screen} from '../components'

export class QrScanScreen extends Screen {
  get error() {return this.state.error || this.props.Prize.error}

  async componentWillMount() {
  }
  onBarCodeRead(data) {
    if (!this.props.Prize.loading) this.actions.Prizes_Scan({qrcode: data})
    .then(res => {
      if (!this.props.Prize.error) this.Actions.PrizesScreen()
    })
  }

  renderScanner() {
    return <View horizontal center middle fullW fullH flex1>
      <RNCamera ref={ref => {this.camera = ref}}
        onBarCodeRead={this.onBarCodeRead.bind(this)}
        style={style.scanningFrame}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}/>
    </View>
  }
  render() {
    return <Container>
      <Header/>
      {this.renderError()}
      {this.renderScanner()}
      <Footer/>
    </Container>
  }
}
