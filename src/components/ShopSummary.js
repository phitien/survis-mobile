import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {ShopSummary as style} from '../theme/styles/components'

import {itemHelper, substr, openOnMap} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'

const ShopSummary = props => {
  const item = props.item
  const {
    id, image, name, address, totalrate, totalreviews, latitude, longitude
  } = itemHelper(item)
  return <View sp full grey style={style.container}>
  	<View horizontal full>
      <View smb mr small-size-square><Image source={{uri: image}}/></View>
  	  <View flex1>
  		  <View full><Text bold smb>{name}</Text></View>
  	    <View full><Text small>{address}</Text></View>
  	  </View>
  	</View>
  	<View horizontal space-between full>
  	  <Rating totalrate={totalrate} shopid={id}/>
  	  <Text theme small onPress={props.openReview}>({totalreviews}) Reviews</Text>
  	  <Touch onPress={e => openOnMap(latitude, longitude)}><View horizontal>
  		  <Icon theme small name='ios-send'/>
  	    <Text theme small>Get direction</Text>
  	  </View></Touch>
  	</View>
  </View>
}

export {
  ShopSummary
}
