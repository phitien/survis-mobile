import React, {Component} from 'react'
import StarRating from 'react-native-star-rating'
import {connect} from 'react-redux'

import {Rating as style} from '../theme/styles/components'

export class Rating extends Component {
  render() {
    return (
      <StarRating
    		disabled={false}
    		maxStars={this.props.maxStars || parseFloat(style.maxStars)}
    		starSize={this.props.starSize || parseFloat(style.starSize)}
        emptyStarColor={this.props.emptyStarColor || style.fullStarColor}
        fullStarColor={this.props.fullStarColor || style.fullStarColor}
        rating={parseFloat(this.props.rating)}
        selectedStar={this.props.onRate}
      />
    )
  }
}
