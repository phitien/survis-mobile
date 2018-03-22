import React, {Component} from 'react'
import {Container, View, Content, Spinner, Button, Text} from 'native-base'

import {CheckoutPaymentScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer} from '../containers'
import {Component as Screen} from '../components'

export class CheckoutPaymentScreen extends Screen {
  render() {
    return (<Container>
      <Header back='back'/>
      <Content>
        <View horizotal grey p-16>
          <Text bold fs16>Payment</Text>
        </View>
        <View p-25 m-10 grey>
          <Text fs16>Pay by card</Text>
        </View>
        <View p-25 m-10 grey>
          <Text fs16>Cash on delivery</Text>
        </View>
      </Content>
      <Footer>
        <View m-r-10 center center-h>
          <Button small onPress={this.Actions.CheckoutConfirmScreen}>
            <Text>NEXT</Text>
          </Button>
        </View>
      </Footer>
    </Container>)
  }
}
