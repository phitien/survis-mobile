import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity, ScrollView} from 'react-native'

import {NewShops as style} from '../../survis-themes/styles/components'

import {NewShop} from './NewShop'
import {Component} from './Component'

export class NewShops extends Component {
  async componentDidMount() {
    this.locationUpdate(this.actions.NewShops_Get)
  }

  render() {
    return this.props.NewShops.loading ? this.renderLoading() : this.renderContent()
  }
  renderContent() {
    return <ScrollView horizontal>
      {this.props.NewShops.list.map(item => <TouchableOpacity key={item.id} onPress={e => this.Actions.ShopScreen({item})}>
        <NewShop item={item}/>
      </TouchableOpacity>)}
    </ScrollView>
  }
}
