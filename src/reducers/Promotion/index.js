import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Promotion || {}

export default function(state = initialState, action) {
  const name = 'Promotion'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
