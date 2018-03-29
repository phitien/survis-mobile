import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Promotion as style} from '../theme/styles/components'

import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {Component} from './Component'

export class Promotion extends Component {
  render() {
    const item = this.props.item
    const {
      id, image, bigtitle, smalltitle, toptext,
      toptext_bgcolor, toptext_color, toptext_fontsize,
    } = itemHelper(item)
    const wordStyle = {backgroundColor: toptext_bgcolor, color: toptext_color, fontSize: toptext_fontsize,}
  	const words = toptext.split(' ')
  	return <View>
      <View style={style.image_container}><Image style={style.image} source={{uri: image}}/></View>
      <View style={{...style.toptext, backgroundColor: toptext_bgcolor}}>
        {words.map(t => <Text key={t} style={wordStyle}>{t}</Text>)}
      </View>
      <View bottom mb sp opacity style={style.info}>
        <Text white extra>{bigtitle}</Text>
        <Text white small>{smalltitle}</Text>
      </View>
    </View>
  }
}
