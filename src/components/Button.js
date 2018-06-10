import React from 'react'
import {Button as NBButton} from 'native-base'
import {Spinner} from './Spinner'
import {Component} from './Component'

export class Button extends Component {
  render() {
    if (this.props.loading) return <Spinner/>
    return <NBButton {...this.props}/>
  }
}
