import {CONFIG, MAX_PAGE} from '../constants'

const {ShoppingCart} = CONFIG

export default function(state = ShoppingCart, action) {
  switch (action.type) {
    case 'ShoppingCart_Load': {
      return {...state, ...action.payload, loading: false}
    }
    case 'ShoppingCart_Add': {
      if (!state.list.find(item => item.id == action.payload.id)) state.list.push(action.payload)
      return state
    }
    case 'ShoppingCart_Remove': {
      const item = state.list.find(item => item.id == action.payload.id)
      if (item) state.list.splice(state.list.indexOf(item), 1)
      return state
    }
    case 'ShoppingCart_Decrease': {
      const item = state.list.find(item => item.id == action.payload.id)
      if (item && item.qty > 0) item.qty -= 1
      return state
    }
    case 'ShoppingCart_Increase': {
      const item = state.list.find(item => item.id == action.payload.id)
      if (item) item.qty += 1
      return state
    }
    case 'ShoppingCart_Clear': {
      return {...state, list: [], count: 0, loading: false, checked: undefined}
    }
    case 'ShoppingCart_Checkout_Pending': {
      return {...state, loading: true, checked: undefined}
    }
    case 'ShoppingCart_Checkout_Success': {
      if (!action.payload.result) return {...state, loading: false, checked: false}
      return {
        ...state, loading: false,
        list: action.payload, count: [].concat(action.payload).length,
        gotprize: action.payload.prizecheck,
        checked: true,
      }
    }
    case 'ShoppingCart_Checkout_Failure': {
      return {...state, loading: false, checked: false}
    }
    default: {
      return {...state, loading: false, checked: undefined}
    }
  }
}
