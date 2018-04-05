import * as models from '../../models'
import {log} from '../../utils'
import {stateToProps} from '../helper'
import NewShops from './NewShops'
import HighRatingShops from './HighRatingShops'
import SearchShops from './SearchShops'

const initialState = models.Shops || {}

export default function(state = initialState, action) {
  const name = 'Shop'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  rs = HighRatingShops(state, action)
  if (rs) return rs
  rs = SearchShops(state, action)
  if (rs) return rs
  rs = NewShops(state, action)
  if (rs) return rs
  switch (action.type) {
    case `${name}_Rate_Success`: {
      if (action.payload) {
        const found = state[plural].list.find(o => o.id == action.payload.id)
        if (found) found.totalrate = action.payload.totalrate
      }
      return {...state}
    }
  }
  return state
}
