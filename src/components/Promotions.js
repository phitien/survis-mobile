import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {Promotions as style} from '../theme/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'
import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {Promotion} from './Promotion'
import {Component} from './Component'

export class Promotions extends Component {
  get items() {return this.props.Promotion.Promotions.list || []}
  async componentDidMount() {
    this.locationUpdate(this.actions.Promotion_Promotions)
  }
  render() {
    return <View style={style.container}>
      {this.renderContent()}
    </View>
  }
  renderContent() {
    if (!this.items.length) return null
    return <Swiper autoplayTimeout={AUTOPLAY_TIMEOUT} autoplay showsPagination={false} loop>
      {this.items.map(item => <Touch key={item.id} onPress={e => this.Actions.PromotionScreen({item})}>
        <Promotion item={item}/>
      </Touch>)}
    </Swiper>
  }
}
