import React, {Component} from 'react'
import PlaceholderImage from 'react-native-image-placeholder'

import {PRIMARY, BLANK_IMG} from '../constants'

export class Image extends Component {
  render() {
    if (!this.props.source) return null
    if (this.props.source && this.props.source.hasOwnProperty('uri') && !this.props.source.uri) return null
    return <PlaceholderImage
      {...this.props}
      loadingStyle={{size: 'large', color: PRIMARY}}
      placeholderSource={BLANK_IMG}/>
  }
}
