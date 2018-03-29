import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Review || {}

export default function(state = initialState, action) {
  const name = 'Review'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
