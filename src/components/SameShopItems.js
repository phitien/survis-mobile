import React from 'react'
import {Content, Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {SameShopItem} from './SameShopItem'
import {Component} from './Component'

export class SameShopItems extends Component {
  get klass() {return 'SameShopItems'}
  get items() {return this.props.ShopItem.ShopItems.list || []}

  render() {
    if (!this.items.length) return null
    return <View grey>
      <Text big bold m>Others from us</Text>
      <Content horizontal grey>
        {this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={e => this.open('ShopItemScreen', {item})}>
          <SameShopItem item={item}/>
        </Touch>)}
      </Content>
    </View>
  }
}
