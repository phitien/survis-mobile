import React from 'react'
import PlaceholderImage from 'react-native-image-placeholder'

import {PRIMARY, BLANK_IMG} from '../constants'
import {Component} from './Component'

export class Image extends Component {
  render() {
    if (!this.props.source) return null
    if (this.props.source && this.props.source.hasOwnProperty('uri') && !this.props.source.uri) return null
    return <PlaceholderImage
      {...this.props}
      style={{width: '100%', height: '100%'}}
      loadingStyle={{size: 'large', color: PRIMARY}}
      placeholderSource={BLANK_IMG}/>
  }
}
