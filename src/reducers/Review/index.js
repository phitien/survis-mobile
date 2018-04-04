import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Review || {}

export default function(state = initialState, action) {
  const name = 'Review'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  switch (action.type) {
    case `${name}_Add_Pending`: {return {...state, loading: true}}
    case `${name}_Add_Success`: {return {...state, ...action.payload, error: false, loading: false}}
    case `${name}_Add_Failure`: {return {...state, error: action.payload.error, loading: false}}
  }
  return state
}
