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
    this.actions.Search_Reset()
    this.actions.Categories_Search({catid: item.id})
    this.actions.Search_Search({catid: item.id})
    let currentScene = this.Actions.currentScene.toString()
    if (currentScene !== 'SearchScreen') this.Actions.SearchScreen()
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
            <View style={style.icon_container}>
              <Image key={item.id} source={{uri: item.image}} style={style.icon}/>
            </View>
            <Text bold fs12>{substr(item.name, 7)}</Text>
          </View>
        </TouchableOpacity>)}
      </View>)}
    </Swiper>
  }
}
