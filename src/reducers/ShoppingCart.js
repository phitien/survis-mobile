import {CONFIG, MAX_PAGE} from '../constants'

const {ShoppingCart} = CONFIG

export default function(state = ShoppingCart, action) {
  switch (action.type) {
    case 'ShoppingCart_Load': {
      return {...state, ...action.payload, loading: false}
    }
    case 'ShoppingCart_Add': {
      if (!state.list.find(item => item.id == action.payload.id)) state.list.push({...action.payload, qty: 1})
      return state
    }
    case 'ShoppingCart_Remove': {
      const item = state.list.find(item => item.id == action.payload.id)
      if (item) state.list.splice(state.list.indexOf(item), 1)
      return state
    }
    case 'ShoppingCart_Decrease': {
      const item = state.list.find(item => item.id == action.payload.id)
      if (item) {
        item.qty = parseInt(item.qty) ? parseInt(item.qty) : 1
        if (item.qty > 0) item.qty -= 1
      }
      return {...state, loading: false}
    }
    case 'ShoppingCart_Increase': {
      const item = state.list.find(item => item.id == action.payload.id)
      if (item) {
        item.qty = parseInt(item.qty) ? parseInt(item.qty) : 1
        item.qty += 1
      }
      return {...state, loading: false}
    }
    case 'ShoppingCart_Clear': {
      return {...state, message: null, error: false, list: [], count: 0, loading: false, checked: undefined}
    }
    case 'ShoppingCart_Place_Pending': {
      return {...state, loading: true}
    }
    case 'ShoppingCart_Place_Success': {
      return {...state, ...action.payload, error: false, list: [], loading: false}
    }
    case 'ShoppingCart_Place_Failure': {
      return {...state, message: false, loading: false}
    }
    default: {
      return {...state, loading: false, checked: undefined}
    }
  }
}
