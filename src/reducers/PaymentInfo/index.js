import * as models from '../../models'
import {stateToProps} from '../helper'
import {persitPaymentInfo} from '../helper'

const initialState = models.PaymentInfo || {}

export default function(state = initialState, action) {
  const name = 'PaymentInfo'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
