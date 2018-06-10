import React from 'react'
import {Spinner as NBSpinner} from 'native-base'
import {PRIMARY} from '../constants'
import {Core} from './Core'

export class Spinner extends Core {
  render() {
    return <NBSpinner {...this.props} color={PRIMARY}/>
  }
}
