import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Category || {}

export default function(state = initialState, action) {
  const name = 'Category'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
