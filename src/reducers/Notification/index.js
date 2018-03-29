import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Notification || {}

export default function(state = initialState, action) {
  const name = 'Notification'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
