import React, {Component} from 'react'
import {Container, View, Content, Text} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {PrizesScreen as style} from '../theme/styles/screens'

import {Header, Footer, Prize} from '../containers'
import {Button} from '../components'
import {Screen} from '../components'

export class PrizesScreen extends Screen {
  get items() {return this.props.Prize.Prizes.list || []}
  get error() {return this.state.error || this.props.Prize.error || null}
  get message() {return this.props.Prize.message || null}
  get selected() {return this.items.find(o => o.selected)}
  get isSelected() {return this.selected}

  async componentDidMount() {
    this.actions.Prize_Prizes()
  }

  onPressSubmit() {
    if (this.message) {
      this.actions.Prize_Clear()
      this.open('HomeScreen')
    }
    else if (!this.props.Prize.loading) {
      this.actions.Prize_Submit({prz_id: this.selected.id})
    }
  }

  renderRow(row, i) {
    return <View key={i} horizontal full style={style.row}>
      {row.map((item,j) => <Touch key={`${j}-${item.id}`} onPress={e => this.actions.Prize_Select(item)}><Prize item={item} index={j}/></Touch>)}
    </View>
  }
  renderPrizes() {
    const items = this.items
    const rows = Array.from({length: parseInt(items.length/2)}, (o, i) => items.slice(2*i, 2*i + 2))
    return <View flex1 horizotal full key='list'>{rows.map((row, i) => this.renderRow(row,i))}</View>
  }
  get content() {
    return [
      this.renderError(),
      <View heading key='heading'><Text>Lucky Draw</Text></View>,
      <View m key='main'>
        <Text bold>Congratulation!</Text>
        <Text small italic>You have won a chance to win Lucky Draw. Please pick a prize.</Text>
      </View>,
      this.renderPrizes()
    ]
  }
  get footer() {
    return <View fullW horizontal pr pl middle-end>
      {this.message ? <Text flex1>{this.message}</Text> : null}
      <Button small
        disabled={!this.isSelected}
        loading={this.props.Prize.loading}
        onPress={this.onPressSubmit.bind(this)}>
        <Text>{this.message ? 'Close' : 'Submit'}</Text>
      </Button>
    </View>
  }
}
