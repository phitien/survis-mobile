import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Location || {}

export default function(state = initialState, action) {
  const name = 'Location'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
