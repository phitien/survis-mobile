import React from 'react'
import {Text, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {Categorys as style} from '../theme/styles/components'
import {substr} from '../utils'
import {Image} from './Image'
import {Component} from './Component'

const {height} = style

export class Categorys extends Component {
  get items() {return this.props.Category.Categorys.list || []}
  async componentDidMount() {
    if (!this.props.Category.Categorys.loaded) this.locationUpdate(this.actions.Category_Categorys)
  }

  onPress(item) {
    this.actions.Shop_SearchShops_Reset()
    this.actions.Shop_SearchShops_Search({catid: item.id, page: 0})
    // this.actions.Category_Search({catid: item.id})
    let currentScreen = this.currentScreen
    if (currentScreen !== 'SearchScreen') this.open('SearchScreen')
    else this.actions.Shop_SearchShops()
  }

  renderContent() {
    let cats = [].concat(this.items),
      blocks = [],
      blockNumItem = style.blockNumItem
    while (cats.length) {
      blocks.push(cats.splice(0, blockNumItem))
    }
    return blocks.map((b, i) => <View key={i} full horizontal middle bpl bpr space-between>
      {b.map((item, j) => <Touch key={`${i}-${j}-${item.id}`} onPress={this.onPress.bind(this, item)}>
        <View center middle style={{height}}>
          <View tiny-size-rounded smb><Image bgColor='white' source={{uri: item.image}}/></View>
          <Text bold small>{substr(item.name, 7)}</Text>
        </View>
      </Touch>)}
    </View>)
  }
  render() {
    return <View white full style={{height}}>
      {this.props.Category.loading ? this.renderLoading() : this.renderContent()}
    </View>
  }
}
