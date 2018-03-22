import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'

import {Promotions as style} from '../../survis-themes/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'
import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {Promotion} from './Promotion'
import {Component} from './Component'

export class Promotions extends Component {
  async componentDidMount() {
    this.locationUpdate(this.actions.Promotions_Get)
  }
  render() {
    return <View style={style.container}>
      {this.props.Promotions.loading ? this.renderLoading() : this.renderContent()}
    </View>
  }
  renderContent() {
    return <Swiper autoplayTimeout={AUTOPLAY_TIMEOUT} autoplay height={style.container.height} showsPagination={false} loop>
      {this.props.Promotions.list.map(item => <TouchableOpacity key={item.id} onPress={e => this.Actions.PromotionScreen({item})}>
        <Promotion item={item}/>
      </TouchableOpacity>)}
    </Swiper>
  }
}
