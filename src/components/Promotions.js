import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {AUTOPLAY_TIMEOUT} from '../constants'

import {Image} from './Image'
import {Promotion} from './Promotion'
import {Component} from './Component'

export class Promotions extends Component {
  get klass() {return 'Promotions'}
  get items() {return this.props.Promotion.Promotions.list || []}
  async componentDidMount() {
    this.actions.Promotion_Promotions()
  }
  renderContent() {
    if (!this.items.length) return null
    return <Swiper autoplayTimeout={AUTOPLAY_TIMEOUT} autoplay showsPagination={false} loop>
      {this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={e => this.open('PromotionScreen', {item})}>
        <Promotion item={item}/>
      </Touch>)}
    </Swiper>
  }
  render() {
    return <View big-size>
      {this.renderContent()}
    </View>
  }
}
