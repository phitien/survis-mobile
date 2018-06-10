import React from 'react'
import StarRating from 'react-native-star-rating'

import {Component} from './Component'

export class Rating extends Component {
  get klass() {return 'Rating'}
  render() {
    const {maxStars, starSize, fullStarColor, emptyStarColor} = this.cmpStyle
    return (
      <StarRating
    		{...this.props}
    		maxStars={this.props.maxStars || parseFloat(maxStars)}
    		starSize={this.props.starSize || parseFloat(starSize)}
        emptyStarColor={this.props.emptyStarColor || emptyStarColor}
        fullStarColor={this.props.fullStarColor || fullStarColor}
        rating={parseFloat(this.props.rating)}
        selectedStar={this.props.onRate}
      />
    )
  }
}
