import React from 'react'
import {Text, Icon, View, Content} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

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
    let cats = [].concat(this.items)
    return cats.map((item, j) => <Touch key={j} onPress={this.onPress.bind(this, item)}>
      <View center middle bpr={j != cats.length} style={{height}}>
        <View tiny-size-rounded smb grey><Image bgColor='white' source={{uri: item.image}}/></View>
        <Text bold small nowrap>{item.name}</Text>
      </View>
    </Touch>)
  }
  render() {
    if (this.props.Category.loading) return <View white center full style={{height}}>{this.renderLoading()}</View>
    let cats = [].concat(this.items)
    if (!cats.length) return null
    return <Content horizontal grey full style={{height}}>
      <View horizontal middle bpl bpr center minW style={{height}}>{this.renderContent()}</View>
    </Content>
  }
}
