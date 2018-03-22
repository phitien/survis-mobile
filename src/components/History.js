import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {History as style} from '../../survis-themes/styles/components'

import {itemHelper, substr} from '../utils'

import {Image} from './Image'

const History = props => {
  const item = props.item
  const {
    id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
    toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
    address, isfeatured, promotion_image, highlight, distance, shop_info, items
  } = itemHelper(item)
  return (
    <View horizontal style={style.container}>
		<Image resizeMode='stretch' style={style.image} source={{uri: image}}/>
		<View p-l-10 style={style.info}>
			<View m-t-5 horizontal>
				<Text fs14 bold>{substr(name, 40)}</Text>
			</View>
			<View horizontal>
				<Text fs12>{substr(description, 150)}</Text>
			</View>
			<View horizontal>
				<Text fs14 bold theme>{price}</Text>
			</View>
			<View horizontal>
				<Text fs12>{orderdate}</Text>
			</View>
		</View>
    </View>
  )
}

export {
  History
}
