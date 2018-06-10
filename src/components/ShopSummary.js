import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {ShopSummary as style} from '../theme/styles/components'

import {Image} from './Image'
import {Rating} from './Rating'
import {Reviews} from '../containers'
import {Component} from './Component'

export class ShopSummary extends Component {
  state = {showReview: false}
  get item() {return this.props.item || {}}

  render() {
    const {
      id, image, name, address, totalrate, totalreviews, latitude, longitude
    } = this.utils.itemHelper(this.item)
    return <View full grey>
    	<View horizontal sp full>
        <View smb mr small-size-square><Image source={{uri: image}}/></View>
    	  <View flex1>
    		  <View full><Text bold smb>{name}</Text></View>
    	    <View full><Text small>{address}</Text></View>
    	  </View>
    	</View>
    	<View horizontal sp space-between full>
    	  <Rating rating={totalrate}/>
        <Text theme small onPress={e => {
          this.setState({showReview: !this.state.showReview})
          if (this.props.openPressReview) this.props.openPressReview(e)
        }}>{`(${totalreviews}) Reviews`}</Text>
    	  <Touch onPress={e => this.utils.openOnMap(latitude, longitude, name)}><View horizontal>
    		  <Icon theme small name='ios-send'/>
    	    <Text theme small>Get direction</Text>
    	  </View></Touch>
    	</View>
    </View>
  }
}
