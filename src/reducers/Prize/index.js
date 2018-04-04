import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Prize || {}

export default function(state = initialState, action) {
  const name = 'Prize'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  switch (action.type) {
    case `${name}_Submit_Pending`: {return {...state, loading: true}}
    case `${name}_Submit_Success`: {return {...state, ...action.payload, error: false, loading: false}}
    case `${name}_Submit_Failure`: {return {...state, ...action.payload, loading: false}}
    case `${name}_Scan_Pending`: {return {...state, message: false, error: false, loading: true}}
    case `${name}_Scan_Success`: {return {...state, ...action.payload, error: false, loading: false}}
    case `${name}_Scan_Failure`: {return {...state, ...action.payload, loading: false}}
  }
  return state
}
