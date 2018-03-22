import React from 'react'
import {Text, Icon, View} from 'native-base'
import {TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'

import {Categories as style} from '../../survis-themes/styles/components'
import {substr} from '../utils'
import {Image} from './Image'
import {Component} from './Component'

export class Categories extends Component {
  async componentDidMount() {
    this.locationUpdate(this.actions.Categories_Get)
  }

  onPress(item) {
    let currentScene = this.Actions.currentScene.toString()
    if (currentScene !== 'SearchScreen') this.Actions.SearchScreen()
    this.actions.Categories_Search({catid: item.id})
    this.actions.Categories_Get({catid: item.id})
    this.actions.Shops_Search({catid: item.id})
    this.actions.Shops_Get()
  }

  render() {
    return <View style={style.container}>
      {this.props.Categories.loading ? this.renderLoading() : this.renderContent()}
    </View>
  }
  renderContent() {
    let cats = [].concat(this.props.Categories.list),
      blocks = [],
      blockNumItem = style.blockNumItem
    while (cats.length) {
      blocks.push(cats.splice(0, blockNumItem))
    }
    return <Swiper showsPagination={false} loop>
      {blocks.map((b, i) => <View key={i} horizontal style={style.block}>
        {b.map((item, j) => <TouchableOpacity key={j} onPress={this.onPress.bind(this, item)}>
          <View center style={style.item}>
            <Image key={item.id} source={{uri: item.image}} style={style.icon}/>
            <Text bold fs12>{substr(item.name, 7)}</Text>
          </View>
        </TouchableOpacity>)}
      </View>)}
    </Swiper>
  }
}
