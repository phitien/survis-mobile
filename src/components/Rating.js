import React, {Component} from 'react'
import StarRating from 'react-native-star-rating'
import {connect} from 'react-redux'

import {Rating as style} from '../theme/styles/components'
import {apis} from '../apis'

export class Rating extends Component {
  render() {
    return (
      <StarRating
    		disabled={false}
    		maxStars={style.maxStars}
    		starSize={style.starSize}
        fullStarColor={style.fullStarColor}
        rating={this.props.totalrate}
        selectedStar={this.props.onRate}
      />
    )
  }
}
