import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {NewShop as style} from '../theme/styles/components'

import {itemHelper, substr, openOnMap} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'
import {Component} from './Component'

export class NewShop extends Component {
  render() {
    const item = this.props.item
    const {
      image, address, name, latitude, longitude, distance,
    } = itemHelper(item)
    return <View ml mb style={style.container}>
      <View style={style.image_container}><Image style={style.image} source={{uri: image}}/></View>
      <View bottom full>
        <View full opacity sp style={style.address}>
          <Text small white>{address}</Text>
        </View>
        <View full white sp>
          <Text center small bold>{name}</Text>
          <Touch onPress={e => openOnMap(latitude, longitude)}>
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
