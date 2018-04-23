import React from 'react'
import {Text, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {Categorys as style} from '../theme/styles/components'
import {substr} from '../utils'
import {Image} from './Image'
import {Component} from './Component'

const {height, width} = style

export class Categorys extends Component {
  get current() {return this.props.Category.Categorys.filter.current}
  get items() {return [].concat(this.current ? this.current.children : this.props.Category.Categorys.list).filter(o => o)}
  async componentDidMount() {
    if (!this.props.Category.Categorys.loaded) this.locationUpdate(this.actions.Category_Categorys)
  }

  onPress(item) {
    const refresh = e => {
      this.actions.Shop_SearchShops_Reset()
      this.actions.Shop_SearchShops_Search({catid: item.id, page: 0})
      let currentScreen = this.currentScreen
      if (currentScreen !== 'SearchScreen') this.open('SearchScreen')
      else this.actions.Shop_SearchShops()
    }
    this.actions.Category_Search({catid: item.id, current: item})
    .then(e => {
      if (!item.loaded) refresh()
      else this.actions.Category_Categorys({catid: item.id, current: item})
      .then(refresh)
    })
  }

  renderContent() {
    let cats = [].concat(this.items),
      blocks = [],
      blockNumItem = style.blockNumItem
    while (cats.length) {
      blocks.push(cats.splice(0, blockNumItem))
    }
    return blocks.map((b, i) => <View key={i} full horizontal middle bpl bpr center>
      {b.map((item, j) => <Touch key={`${i}-${j}-${item.id}`} onPress={this.onPress.bind(this, item)}>
        <View center middle pr pl style={{height}}>
          <View tiny-size-rounded smb grey><Image bgColor='white' source={{uri: item.image}}/></View>
          <Text bold small nowrap>{item.name}</Text>
        </View>
      </Touch>)}
    </View>)
  }
  render() {
    if (this.props.Category.loading) return <View white center full style={{minHeight: height}}>{this.renderLoading()}</View>
    let cats = [].concat(this.items)
    if (!cats.length) return null
    return <View white center full style={{minHeight: height}}>
      {this.renderContent()}
    </View>
  }
}
