import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity} from 'react-native'

import {ShopSummary as style} from '../../survis-themes/styles/components'

import {itemHelper, substr, openOnMap} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'

const ShopSummary = props => {
  const item = props.item
  const {
    id, image, name, address, totalrate, totalreviews, latitude, longitude
  } = itemHelper(item)
  return <View style={style.container}>
  	<View horizontal>
      <Image resizeMode='stretch' style={style.image} source={{uri: image}}/>
  	  <View style={style.info}>
  		  <Text bold m-b-10>{name}</Text>
  	    <Text small>{address}</Text>
  	  </View>
  	</View>
  	<View horizontal style={style.statistic}>
  	  <Rating totalrate={totalrate} shopid={id}/>
  	  <Text theme fs12 onPress={props.openReview}>({totalreviews}) Reviews</Text>
  	  <TouchableOpacity onPress={e => openOnMap(latitude, longitude)}><View horizontal>
  		  <Icon new-shop name='ios-send'/>
  	    <Text theme fs12 theme>Get direction</Text>
  	  </View></TouchableOpacity>
  	</View>
  </View>
}

export {
  ShopSummary
}
