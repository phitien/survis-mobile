import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'

import {Promotion as style} from '../theme/styles/components'

import {Image} from './Image'
import {Component} from './Component'

export class Promotion extends Component {
  render() {
    const item = this.props.item
    const {
      id, image, bigtitle, smalltitle, toptext,
      toptext_bgcolor, toptext_color, toptext_fontsize,
    } = this.utils.itemHelper(item)
    const wordStyle = {backgroundColor: toptext_bgcolor, color: toptext_color, fontSize: toptext_fontsize,}
  	const words = toptext.split(' ')
  	return <View big-size mb>
      <View big-size><Image source={{uri: image}}/></View>
      <View style={{...style.toptext, backgroundColor: toptext_bgcolor}}>
        {words.map(t => <Text key={t} style={wordStyle}>{t}</Text>)}
      </View>
      <View bottom mb sp bg-opacity>
        <View full><Text white extra>{bigtitle}</Text></View>
        <View full><Text white small>{smalltitle}</Text></View>
      </View>
    </View>
  }
}
