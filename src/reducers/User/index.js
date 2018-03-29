import * as models from '../../models'
import {stateToProps} from '../helper'
import {persitUser} from '../helper'

const initialState = models.User || {}

export default function(state = initialState, action) {
  const name = 'User'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  switch (action.type) {
		case `${name}_ChangePassword_Pending`: {
      return {...state, loading: true}
    }
    case `${name}_ChangePassword_Success`: {
      return {...state, error: false, loading: false}
    }
    case `${name}_ChangePassword_Failure`: {
      return {...state, ...action.payload, loading: false}
    }

		case `${name}_Update_Pending`: {
      return {...state, loading: true}
    }
    case `${name}_Update_Success`: {
      state[name] = action.payload
      persitUser(state[name])
      return {...state, error: false, loading: false}
    }
    case `${name}_Update_Failure`: {
      return {...state, ...action.payload, loading: false}
    }

    case `${name}_Resgister_Pending`: {
      return {...state, loading: true}
    }
    case `${name}_Resgister_Success`: {
      return {...state, error: false, ...action.payload, loading: false}
    }
    case `${name}_Resgister_Failure`: {
      return {...state, ...action.payload, loading: false}
    }

    case `${name}_Login_Pending`: {
      return {...state, loading: true}
    }
    case `${name}_Login_Success`: {
      state[name] = action.payload
      persitUser(state[name])
      return {...state, error: false, loading: false}
    }
    case `${name}_Login_Failure`: {
      return {...state, ...action.payload, loading: false}
    }

    case `${name}_Logout_Pending`: {
      persitUser({})
      return {...state, [name]: {}, error: false, loading: false}
    }
    case `${name}_Logout_Success`: {
      persitUser({})
      return {...state, [name]: {}, error: false, loading: false}
    }
    case `${name}_Logout_Failure`: {
      persitUser({})
      return {...state, ...action.payload, [name]: {}, loading: false}
    }
  }
  return state
}
