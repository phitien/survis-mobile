import React, {Component} from 'react'
import {Container, View, Content, Button, Text} from 'native-base'
import Dash from 'react-native-dash'

import {PrizesScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer, Prize} from '../containers'
import {Component as Screen} from '../components'

export class PrizesScreen extends Screen {
  get items() {return this.props.Prizes.list}

  async componentDidMount() {
    if (this.picked) {
      this.state.prz_id = null
      this.Actions.replace('HomeScreen', {message: 'You have been picked a prize successfully.'})
    }
  }

  state = {
    prz_id: null
  }

  submitPrize() {
    this.actions.Prizes_Pick({prz_id: this.state.prz_id})
  }

  render() {
    const grid = [];
    const items = this.items
    const prz_id = this.state.prz_id
    for (let i = 0; i < items.length; i = i + 2) {
      grid.push(<View horizontal>
        <Prize selected={prz_id == items[i].id} onPress={e => this.setState({prz_id: items[i].id})} item={items[i]}/>
        <Prize selected={prz_id == items[i + 1].id} onPress={e => this.setState({prz_id: items[i + 1].id})} item={items[i + 1]}/>
      </View>)
    }
    return <Container>
      <Header/>
      <Content>
        <View horizontal grey p-16>
          <Text bold fs12>Lucky Draw</Text>
        </View>
        <View p-16>
          <Text fs12>
            Gourmet cooking is a style of food preparation that deals with the finest and freshest lorem ipsum dolos possible ingredients.
          </Text>
        </View>
        <Dash/> {grid.map(item => item)}
      </Content>
      <Footer>
        <View m-r-10 center-h>
          <Button small onPress={this.submitPrize.bind(this)} disabled={!this.state.prz_id}>
            <Text>Submit</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
