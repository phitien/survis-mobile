import React from 'react'
import {Text, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {Categorys as style} from '../theme/styles/components'
import {substr} from '../utils'
import {PRIMARY, GREY} from '../constants'
import {Image} from './Image'
import {Component} from './Component'

export class Categorys extends Component {
  get items() {return this.props.Category.Categorys.list || []}
  async componentDidMount() {
    this.locationUpdate(this.actions.Category_Categorys)
  }

  onPress(item) {
    this.actions.Category_Search({catid: item.id})
    this.actions.Shop_SearchShops_Search({catid: item.id, page: 0})
    let currentScene = this.Actions.currentScene.toString()
    if (currentScene !== 'SearchScreen') this.Actions.SearchScreen()
    else this.actions.Shop_SearchShops()
  }

  renderContent() {
    let cats = [].concat(this.items),
      blocks = [],
      blockNumItem = style.blockNumItem
    while (cats.length) {
      blocks.push(cats.splice(0, blockNumItem))
    }
    return <Swiper showsPagination={false} loop>
      {blocks.map((b, i) => <View key={i} horizontal middle bpl bpr space-between>
        {b.map((item, j) => <Touch key={item.id} onPress={this.onPress.bind(this, item)}>
          <View center middle style={{height: style.height}}>
            <View tiny-size-rounded smb><Image source={{uri: item.image}}/></View>
            <Text bold small>{substr(item.name, 7)}</Text>
          </View>
        </Touch>)}
      </View>)}
    </Swiper>
  }
  render() {
    return <View white style={{height: style.height}}>
      {this.props.Category.loading ? this.renderLoading() : this.renderContent()}
    </View>
  }
}
