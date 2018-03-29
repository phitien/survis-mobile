import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.PaymentMethod || {}

export default function(state = initialState, action) {
  const name = 'PaymentMethod'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
