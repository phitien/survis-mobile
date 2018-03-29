import React, {Component} from 'react'
import StarRating from 'react-native-star-rating'
import {connect} from 'react-redux'

import {Rating as style} from '../theme/styles/components'
import {apis} from '../apis'

class CMPRating extends Component {
  state = {
    totalrate: this.props.totalrate
  }
  render() {
    const {itemid, shopid, reviewid, User} = this.props
    return (
      <StarRating
    		disabled={false}
    		maxStars={style.maxStars}
    		starSize={style.starSize}
    		starColor={style.starColor}
        rating={this.state.totalrate}
    		selectedStar={(rating) => {
	        let data = {usr_id: id, usr_rating: rating}
          apis.ObjectRate(data, itemid, shopid, reviewid)
          .then(res => console.log('Rating submitted', data, res))
        }}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    User: state.User,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export const Rating = connect(
  mapStateToProps,
  mapDispatchToProps
)(CMPRating)
