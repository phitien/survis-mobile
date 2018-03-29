import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {HighRatingShops as style} from '../theme/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'

import {HighRatingShop} from './HighRatingShop'
import {Component} from './Component'

export class HighRatingShops extends Component {
  get items() {return this.props.Shop.HighRatingShops.list || []}

  async componentDidMount() {
    this.locationUpdate(this.actions.Shop_HighRatingShops)
  }

  renderContent() {
    return <Swiper autoplayTimeout={AUTOPLAY_TIMEOUT} autoplay showsPagination={false} loop>
		    {this.items.map(item => <Touch key={item.id} onPress={e => this.Actions.ShopScreen({item})}>
          <HighRatingShop item={item}/>
        </Touch>)}
		</Swiper>
  }
  render() {
    if (!this.items.length) return null
    return <View style={style.container}>
      {this.renderContent()}
    </View>
  }
}
