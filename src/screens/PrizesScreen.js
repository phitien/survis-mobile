import React, {Component} from 'react'
import {Container, View, Content, Text} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {PrizesScreen as style} from '../theme/styles/screens'

import {Header, Footer, Prize} from '../containers'
import {Button} from '../components'
import {Component as Screen} from '../components'

export class PrizesScreen extends Screen {
  get items() {return this.props.Prize.Prizes.list || []}
  get error() {return this.state.error || this.props.Prize.error}

  async componentDidMount() {
    this.actions.Prize_Prizes()
  }

  onPressSubmit() {
    if (!this.props.Prize.loading) {
      this.actions.Prizes_Submit({prz_id: this.items.find(o => o.selected).id})
      .then(res => {
        if (!this.props.Prize.error) this.Actions.HomeScreen()
      })
    }
  }

  renderRow(row, i) {
    return <View key={i} horizontal full style={style.row}>
      {row.map((item,i) => <Touch onPress={e => this.actions.Prizes_Submit(item)}><Prize item={item}/></Touch>)}
    </View>
  }
  renderPrizes() {
    const items = this.items
    const rows = Array.from({length: parseInt(items.length/2)}, (o, i) => items.slice(2*i, 2*i + 2))
    return <View flex1 horizotal full>{rows.map((row, i) => this.renderRow(row,i))}</View>
  }
  render() {
    return <Container>
      <Header/>
      <Content>
        {this.renderError()}
        <View heading><Text>Lucky Draw</Text></View>
        <View m>
          <Text bold>Congratulation!!</Text>
          <Text small italic>You have won a chance to win Lucky Draw. Please pick a prize.</Text>
        </View>
        {this.renderPrizes()}
      </Content>
      <Footer>
        <View flex1></View>
        <View mr center middle>
          <Button small loading={this.props.Prize.loading}
            onPress={this.onPressSubmit.bind(this)}
            disabled={!this.props.Prize.Prizes.list.find(o => o.selected)}>
            <Text>Submit</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  }
}
