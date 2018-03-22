import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Prize as style} from '../../survis-themes/styles/components'

import {Image} from './Image'

const Prize = props => {
  const { selected, item } = props
  return <View style={style.container}>
    {selected ?<View style={style.icon_wrapper}>
      <Icon style={style.icon} name='ios-arrow-dropdown-circle'/>
    </View> : null}
    <Image resizeMode='stretch' style={style.image} source={{uri: item.image}}/>
    <View center-h horizontal m-t-5>
      <Text fs12 bold>{item.name}</Text>
    </View>
    <Text fs12>{item.description}</Text>
    <View horizontal m-t-5 center>
      <Image resizeMode='stretch' style={style.image_sponsor} source={{uri: item.sponsor_image}}/>
      <Text bold fs12 theme>{item.sponsor_name}</Text>
    </View>
  </View>
}

export {
  Prize
}
