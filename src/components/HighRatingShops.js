import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {AUTOPLAY_TIMEOUT} from '../constants'

import {HighRatingShop} from '../containers'
import {Component} from './Component'

export class HighRatingShops extends Component {
  get klass() {return 'HighRatingShops'}
  get items() {return this.props.Shop.HighRatingShops.list || []}

  async componentDidMount() {
    this.actions.Shop_HighRatingShops()
  }

  renderContent() {
    return <Swiper autoplayTimeout={AUTOPLAY_TIMEOUT} autoplay showsPagination={false} loop>
		    {this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={e => this.open('ShopScreen', {item})}>
          <HighRatingShop item={item}/>
        </Touch>)}
		</Swiper>
  }
  render() {
    if (!this.items.length) return null
    return <View big-size>
      {this.renderContent()}
    </View>
  }
}
