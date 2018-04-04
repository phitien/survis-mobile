import React from 'react'
import {Text, Spinner, Icon, View} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'

import {ShopSummary as style} from '../theme/styles/components'

import {itemHelper, substr, openOnMap} from '../utils'

import {Image} from './Image'
import {Rating} from './Rating'
import {Reviews} from '../containers'
import {Component} from './Component'

export class ShopSummary extends Component {
  state = {showReview: false}
  get item() {return this.props.item || {}}

  renderReviews() {
    if (!this.state.showReview) return null
    return <Reviews shopid={this.item.id}/>
  }
  render() {
    const {
      id, image, name, address, totalrate, totalreviews, latitude, longitude
    } = itemHelper(this.item)
    return <View full grey>
    	<View horizontal sp full>
        <View smb mr small-size-square><Image source={{uri: image}}/></View>
    	  <View flex1>
    		  <View full><Text bold smb>{name}</Text></View>
    	    <View full><Text small>{address}</Text></View>
    	  </View>
    	</View>
    	<View horizontal sp space-between full>
    	  <Rating totalrate={totalrate} shopid={id}/>
    	  <Text theme small onPress={e => {
          this.setState({showReview: !this.state.showReview})
          if (this.props.openPressReview) this.props.openPressReview(e)
        }}>({totalreviews}) Reviews</Text>
    	  <Touch onPress={e => openOnMap(latitude, longitude)}><View horizontal>
    		  <Icon theme small name='ios-send'/>
    	    <Text theme small>Get direction</Text>
    	  </View></Touch>
    	</View>
      {this.renderReviews()}
    </View>
  }
}
