import React, {Component} from 'react'
import {Container, View, Content, Text} from 'native-base'
import {ScrollView} from 'react-native'
import {TouchableOpacity as Touch} from 'react-native'

import {PrizesScreen as style} from '../../survis-themes/styles/screens'

import {Header, Footer, Prize} from '../containers'
import {Button} from '../components'
import {Component as Screen} from '../components'

export class PrizesScreen extends Screen {
  get error() {return this.state.error || this.props.Prizes.error}

  async componentDidMount() {
    this.actions.Prizes_Get()
  }

  onPressSubmit() {
    this.actions.Prizes_Submit({prz_id: this.props.Prizes.list.find(o => o.selected).id})
    .then(res => {
      if (!this.props.Prizes.error) this.Actions.HomeScreen()
    })
  }

  renderRow(row, i) {
    return <View key={i} horizontal full style={style.row}>
      {row.map((item,i) => <Touch onPress={e => this.actions.Prizes_Pick(item)}><Prize item={item}/></Touch>)}
    </View>
  }
  renderPrizes() {
    const rows = Array.from({length: parseInt(this.props.Prizes.list.length/2)}, (o, i) => this.props.Prizes.list.slice(2*i, 2*i + 2))
    return <View flex1 horizotal full>{rows.map((row, i) => this.renderRow(row,i))}</View>
  }
  render() {
    return <Container>
      <Header/>
      <Content>
        <ScrollView>
          {this.renderError()}
          <View horizotal style={style.heading}>
            <Text bold fs16>Lucky Draw</Text>
          </View>
          <View m>
            <Text bold fs14>Congratulation!!</Text>
            <Text fs12>You have won a chance to win Lucky Draw. Please pick a prize.</Text>
            <Text fs12>Good luck!!</Text>
          </View>
          {this.renderPrizes()}
        </ScrollView>
      </Content>
      <Footer>
        <View flex1></View>
        <View m-r-10 center center-h>
          <Button small loading={this.props.Prizes.loading}
            onPress={this.onPressSubmit.bind(this)}
            disabled={!this.props.Prizes.list.find(o => o.selected)}>
            <Text>Submit</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
