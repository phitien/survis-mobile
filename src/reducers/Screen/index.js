import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Screen || {}

export default function(state = initialState, action) {
  const name = 'Screen'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
