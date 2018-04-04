import React from 'react'
import {Text, Spinner, Icon, View, Button, Input} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {Reviews as style} from '../theme/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'
import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {Review} from './Review'
import {Component} from './Component'

export class Reviews extends Component {
  state = {comment: '', typing: false, error: false}
  get items() {return this.props.Review.Reviews.list || []}
  get error() {return this.state.error || this.props.Review.error}
  get message() {return this.state.message || this.props.Review.message}

  async componentDidMount() {
    this.loadItems()
  }

  loadItems() {
    if (this.props.shopid) this.actions.Review_Reviews({shopid: this.props.shopid})
    else if (this.props.itemid) this.actions.Review_Reviews({itemid: this.props.itemid})
  }
  componentDidUpdate() {
    if (this.props.Review.message) {
      this.actions.Review_Clear()
      this.loadItems()
    }
  }

  onPressSubmit() {
    if (this.props.shopid) this.actions.Review_Add({shopid: this.props.shopid, comment: this.state.comment})
    else if (this.props.itemid) this.actions.Review_Add({itemid: this.props.itemid, comment: this.state.comment})
  }

  render() {
    return <View full mb>
      <View grey full><Text heading>Reviews</Text></View>
      {this.renderError()}
      {this.renderMessage()}
      <View horizontal m>
        <Input white flex1 value={this.state.comment}
          ref={e => this.commentInput = e}
          onChangeText={e => this.setState({comment: e, typing: true})}
          autoCapitalize='none' placeholder='New comment'
          onSubmitEditing={e => this.setState({typing: false})}
          returnKeyType='go'/>
        <Button onPress={this.onPressSubmit.bind(this)} loading={this.props.Review.loading} disabled={!this.state.comment}>
          <Text>Submit</Text>
        </Button>
      </View>
      {this.items.map((item,i) => <Touch key={`${i}-${item.id}`}>
        <Review item={item} index={i}/>
      </Touch>)}
    </View>
  }
}
