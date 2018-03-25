import React from 'react'
import {Text, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {Categories as style} from '../../survis-themes/styles/components'
import {substr} from '../utils'
import {PRIMARY, GREY} from '../constants'
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

  renderCategory(item) {
    const {size} = style
    return <View center>
      <View mt border grey trim style={{height: size, width: size, borderRadius: size/2}}>
        <Image style={{height: '100%', width: '100%'}} borderRadius={size}/>
      </View>
      <Text mt mb bold fs12>{substr(item.name, 7)}</Text>
    </View>
  }

  renderContent() {
    let cats = [].concat(this.props.Categories.list),
      blocks = [],
      blockNumItem = style.blockNumItem
    while (cats.length) {
      blocks.push(cats.splice(0, blockNumItem))
    }
    // return <View center middle>
    //   {blocks.map((b, i) => <View key={i} full fullh center middle horizontal space-around>
    //     {b.map((item, j) => <Touch key={j} onPress={this.onPress.bind(this, item)}>{this.renderCategory(item)}</Touch>)}
    //   </View>)}
    // </View>
    return <Swiper showsPagination={false} loop>
      {blocks.map((b, i) => <View key={i} horizontal style={style.block}>
        {b.map((item, j) => <Touch key={item.id} onPress={this.onPress.bind(this, item)}>
          <View center style={style.item}>
            <View style={style.image_container}>
              <Image source={{uri: item.image}} style={style.image}/>
            </View>
            <Text bold fs12>{substr(item.name, 7)}</Text>
          </View>
        </Touch>)}
      </View>)}
    </Swiper>
  }
  render() {
    return <View style={style.container}>
      {this.props.Categories.loading ? this.renderLoading() : this.renderContent()}
    </View>
  }
}
