import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {NewShop as style} from '../theme/styles/components'

import {Image} from './Image'
import {Rating} from './Rating'
import {Component} from './Component'

export class NewShop extends Component {
  get klass() {return 'NewShop'}
  render() {
    const item = this.props.item
    const {
      image, address, name, latitude, longitude, distance,
    } = this.utils.itemHelper(item)
    return <View ml mb big-size-square>
      <View big-size-square><Image source={{uri: image}}/></View>
      <View bottom full>
        <View full bg-opacity sp style={style.address}>
          <Text small white>{address}</Text>
        </View>
        <View full white sp>
          <Text center small bold>{name}</Text>
          <Touch onPress={e => this.utils.openOnMap(latitude, longitude, name)}>
            <View horizontal center middle smt>
              <Icon theme small name='ios-pin'/>
              <Text small sml>{distance}</Text>
            </View>
          </Touch>
        </View>
      </View>
    </View>
  }
}
