import React, {Component} from 'react'
import {Container, View, Content, Spinner, Button, Text} from 'native-base'

import {CheckoutShippingScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer} from '../containers'
import {Component as Screen} from '../components'

export class CheckoutShippingScreen extends Screen {
  render() {
    return (<Container>
      <Header back="back"/>
      <Content>
        <View horizotal="horizotal" grey="grey" p-16="p-16">
          <Text bold="bold" fs16="fs16">Shipping</Text>
        </View>
        <View p-25="p-25" m-10="m-10" grey="grey">
          <Text fs12="fs12">{this.User.fname}</Text>
          <Text fs12="fs12">{this.User.email}</Text>
        </View>
      </Content>
      <Footer>
        <View m-r-10="m-r-10" center="center" center-h="center-h">
          <Button small="small" onPress={this.Actions.CheckoutPaymentScreen}>
            <Text>NEXT</Text>
          </Button>
        </View>
      </Footer>
    </Container>)
  }
}
