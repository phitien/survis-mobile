import React from 'react'
import {Text, Spinner, Icon, View, Button, Input, Textarea} from 'native-base'
import {TouchableOpacity as Touch} from 'react-native'
import Swiper from 'react-native-swiper'

import {Reviews as style} from '../theme/styles/components'

import {AUTOPLAY_TIMEOUT} from '../constants'
import {itemHelper, substr} from '../utils'

import {Image} from './Image'
import {Review} from './Review'
import {Rating} from './Rating'
import {Component} from './Component'

export class Reviews extends Component {
  state = {comment: '', typing: false, error: false, showPostReview: false}
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

  onPressBack() {
    if (this.props.onPressBack) this.props.onPressBack()
  }
  onPressSubmit() {
    if (this.props.shopid) this.actions.Review_Add({shopid: this.props.shopid, comment: this.state.comment})
    else if (this.props.itemid) this.actions.Review_Add({itemid: this.props.itemid, comment: this.state.comment})
  }

  renderPostReview() {
    return <View center m>
      <View full horizontal center middle mb>
        <Rating starSize={24}/>
        <Text ml flex1>Rate Us</Text>
      </View>
      <Textarea flex1 p rowSpan={5} bordered placeholder='Please leave your comment here'
        ref={e => this.commentInput = e}
        value={this.state.comment}
        onChangeText={e => this.setState({comment: e, typing: true})}
        onSubmitEditing={e => this.setState({typing: false})}
        returnKeyType='go'
      />
      <View horizontal middle-end mt mb>
        <Button mr grey onPress={e => this.setState({showPostReview: false})}><Text>Cancel</Text></Button>
        <Button onPress={e => this.setState({showPostReview: true})}><Text>Submit</Text></Button>
      </View>
    </View>
  }
  renderReviews() {
    return this.items.map((item,i) => <Touch key={`${i}-${item.id}`}>
      <Review item={item} index={i}/>
    </Touch>)
  }
  render() {
    return <View full mb key='review'>
      {!this.state.showPostReview ?
      <View full horizontal center middle space-between p borderb>
        <Touch onPress={this.onPressBack.bind(this)}>
          <View horizontal>
            <Icon name='ios-arrow-back'/>
            <Text>Back</Text>
          </View>
        </Touch>
        <Button onPress={e => this.setState({showPostReview: true})}><Text>Post review</Text></Button>
      </View>
      : null}
      {!this.state.showPostReview ? this.renderReviews() : this.renderPostReview()}
    </View>
  }
}
