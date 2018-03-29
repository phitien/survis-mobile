import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.ShopItem || {}

export default function(state = initialState, action) {
  const name = 'ShopItem'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  return state
}
