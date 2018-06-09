import React from 'react'
import {Text, Spinner, Icon, View, Content} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

import {Luckys as style} from '../theme/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'
import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {Component} from './Component'

export class Luckys extends Component {
  get items() {return this.props.Lucky.Luckys.list || []}
  async componentDidMount() {
    if (this.logged) this.actions.Lucky_Luckys()
  }
  get refreshing() {return this.state.refreshing || this.props.Lucky.loading || false}
  refresh() {
    if (!this.props.Lucky.loading) {
      this.actions.Lucky_Reset()
      this.actions.Lucky_Luckys()
    }
  }
  loadmore() {
    if (!this.props.Lucky.loading) {
      this.actions.Lucky_Loadmore()
      this.actions.Lucky_Luckys()
    }
  }
  renderItem(item,i) {
    const {
      id, image, name, description, pickdate, sponsor_image, sponsor_name, drawdate, status
    } = itemHelper(item)
    return <View horizontal mt mr ml white>
      <View normal-size-square mr><Image source={{uri: image}}/></View>
      <View flex1>
        <View full><Text bold>{drawdate ? status == 'winner' ? 'You won: ' : 'You lost: ' : 'Comming: '}</Text><Text bold theme>{name}</Text></View>
        <View full><Text>{description}</Text></View>
        <View full horizontal middle>
          <Text small>Sponsor: {sponsor_name}</Text>
          <View ml style={style.sponsor_image}><Image source={{uri: sponsor_image}}/></View>
        </View>
        <View full><Text small italic grey>Placed: {pickdate}</Text></View>
        {drawdate ? <View small italic><Text small>Draw date: {drawdate}</Text></View> : null}
      </View>
    </View>
  }
  render() {
    return <InfiniteScroll key='main' horizontal={false} distanceFromEnd={10} style={{flex:1}}
      // refreshControl={this.refreshControl}
      onLoadMoreAsync={this.loadmore.bind(this)}>
      {this.props.Lucky.loading ? <View key='loading' tiny-size>{this.renderLoading()}</View> : null}
      {this.items.map((item,i) => <Touch key={`${i}-${item.id}`}>
        {this.renderItem(item,i)}
      </Touch>)}
    </InfiniteScroll>
  }
}
