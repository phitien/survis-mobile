import React from 'react'
import {Spinner as NBSpinner} from 'native-base'
import {PRIMARY} from '../constants'
import {Core} from './Core'

export class Spinner extends Core {
  get klass() {return 'Spinner'}
  render() {
    return <NBSpinner {...this.props} color={PRIMARY}/>
  }
}
