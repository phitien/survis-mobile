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
  return <View p grey style={style.container}>
  	<View horizontal>
      <View mb mr style={style.image_container}><Image resizeMode='stretch' style={style.image} source={{uri: image}}/></View>
  	  <View flex1 style={style.info}>
  		  <Text bold mb>{name}</Text>
  	    <Text small>{address}</Text>
  	  </View>
  	</View>
  	<View horizontal space-between style={style.statistic}>
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
