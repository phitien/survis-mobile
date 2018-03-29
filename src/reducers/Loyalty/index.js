import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Loyalty || {}

export default function(state = initialState, action) {
  const name = 'Loyalty'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
