import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Device || {}

export default function(state = initialState, action) {
  const name = 'Device'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
