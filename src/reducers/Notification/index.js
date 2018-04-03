import * as models from '../../models'
import {stateToProps} from '../helper'

const initialState = models.Notification || {}

export default function(state = initialState, action) {
  const name = 'Notification', plural = 'Notifications', props = `${name}_${plural}`
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  switch (action.type) {
    case `${name}_Read_Pending`: {
      return {...state, loading: true}
    }
    case `${name}_Read_Success`: {
      const noti = action.payload || {}
      const found = state[plural].list.find(o => action.payload.id)
      if (found) found.is_read = true
      return {...state, loading: false}
    }
    case `${name}_Read_Failure`: {
      return {...state, loading: false}
    }
  }
  return state
}
