import React from 'react'
import {Content, Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {NewShops as style} from '../theme/styles/components'

import {NewShop} from './NewShop'
import {Component} from './Component'

export class NewShops extends Component {
  get klass() {return 'NewShops'}
  get items() {return this.props.Shop.NewShops.list || []}

  async componentDidMount() {
    this.locationUpdate(this.actions.Shop_NewShops)
  }

  render() {
    if (!this.items.length) return null
    return <View grey>
      <Text big bold m>New Shops</Text>
      <Content horizontal grey>
        {this.items.map((item,i) => <Touch key={`${i}-${item.id}`} onPress={e => this.open('ShopScreen', {item})}>
          <NewShop item={item}/>
        </Touch>)}
      </Content>
    </View>
  }
}
