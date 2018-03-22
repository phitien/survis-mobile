import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'

import {HighRatingShops as style} from '../../survis-themes/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'

import {HighRatingShop} from './HighRatingShop'
import {Component} from './Component'

export class HighRatingShops extends Component {
  async componentDidMount() {
    this.locationUpdate(this.actions.HighRatingShops_Get)
  }

  render() {
    return <View style={style.container}>
      {this.props.HighRatingShops.loading ? this.renderLoading() : this.renderContent()}
    </View>
  }
  renderContent() {
    return <Swiper autoplayTimeout={AUTOPLAY_TIMEOUT} autoplay height={style.container.height} showsPagination={false} loop>
		{this.props.HighRatingShops.list.map(item => <TouchableOpacity key={item.id} onPress={e => this.Actions.ShopScreen({item})}>
      <HighRatingShop item={item}/>
    </TouchableOpacity>)}
		</Swiper>
  }
}
