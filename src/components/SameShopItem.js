import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {SameShopItem as style} from '../theme/styles/components'

import {itemHelper, substr, openOnMap} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'
import {Component} from './Component'

export class SameShopItem extends Component {
  render() {
    const item = this.props.item
    const {
      image, name, priceS, mpriceS
    } = itemHelper(item)
    return <View ml mb normal-size-square>
      <View normal-size-square><Image source={{uri: image}}/></View>
      <View bottom full>
        <View full bg-opacity sp>
          <Text center small white bold>{name}</Text>
          <View full center horizontal>
            <Text smt small grey line-through mr>{mpriceS}</Text>
            <Text smt small theme>{priceS}</Text>
          </View>
        </View>
      </View>
    </View>
  }
}
