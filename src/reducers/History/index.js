import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.History || {}

export default function(state = initialState, action) {
  const name = 'History'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
