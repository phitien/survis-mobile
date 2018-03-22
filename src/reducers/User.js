import {CONFIG, MAX_PAGE} from '../constants'

const {User} = CONFIG

export default function(state = User, action) {
  switch (action.type) {
    case 'User_Load': {
      return {...state, ...action.payload, loading: false}
    }
    case 'User_Error': {
      return {...state, error: action.payload, loading: false}
    }
    case 'User_EditUser': {
      return {...state, editingUser: action.payload, loading: false}
    }
    case 'User_EditPassword': {
      return {...state, editingPassword: action.payload, loading: false}
    }
    case 'User_Resgister_Pending': {
      return {...state, loading: true}
    }
    case 'User_Resgister_Success': {
      return {...state, error: false, ...action.payload, loading: false}
    }
    case 'User_Resgister_Failure': {
      return {...state, ...action.payload, loading: false}
    }
    case 'User_Login_Pending': {
      return {...state, loading: true}
    }
    case 'User_Login_Success': {
      return {...state, error: false, ...action.payload, loading: false}
    }
    case 'User_Login_Failure': {
      return {...state, ...action.payload, loading: false}
    }
    case 'User_Logout_Pending': {
      return {...state, loading: true}
    }
    case 'User_Logout_Success': {
      return {...state, error: false, ...action.payload, ...state.default, loading: false}
    }
    case 'User_Logout_Failure': {
      return {...state, ...action.payload, ...state.default, loading: false}
    }
    case 'User_Get_Pending': {
      return {...state, loading: true}
    }
    case 'User_Get_Success': {
      return {...state, ...action.payload || {}, loading: false}
    }
    case 'User_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}
