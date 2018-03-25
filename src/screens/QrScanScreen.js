import React, {Component} from 'react'
import {Container, View, Content, Spinner} from 'native-base'
import {RNCamera} from 'react-native-camera'

import {QrScanScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer} from '../containers'
import {Component as Screen} from '../components'

export class QrScanScreen extends Screen {
  get error() {return this.state.error || this.props.Prizes.error}

  async componentWillMount() {
  }
  onBarCodeRead(data) {
    if (!this.props.Prizes.loading) this.actions.Prizes_Scan({qrcode: data})
    .then(res => {
      if (!this.props.Prizes.error) this.Actions.PrizesScreen()
    })
  }

  renderScanner() {
    return <RNCamera ref={ref => {this.camera = ref}}
        onBarCodeRead={this.onBarCodeRead.bind(this)}
        style={style.scanningFrame}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}/>
  }
  render() {
    return (<Container>
      <Header/>
      <Content center contentContainerStyle={style.container}>
        {this.renderError()}
        {this.renderScanner()}
      </Content>
      <Footer/>
    </Container>)
  }
}
