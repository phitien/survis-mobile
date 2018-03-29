import * as models from '../../models'
import {stateToProps} from '../helper'
import {persitShoppingCartItems} from '../helper'

const initialState = models.ShoppingCartItem || {}

export default function(state = initialState, action) {
  const name = 'ShoppingCartItem'
  let rs = stateToProps(name, state, action)
  if (rs) return rs
  switch (action.type) {
    case `${name}_Add`: {
      const item = state[`${name}s`].list.find(item => item.id == action.payload.id)
      if (!item) state[`${name}s`].list.push({...action.payload, qty: 1})
      persitShoppingCartItems(state[`${name}s`])
      return {...state, error: false, loading: false}
    }
    case `${name}_Remove`: {
      const item = state[`${name}s`].list.find(item => item.id == action.payload.id)
      if (item) state[`${name}s`].list.splice(state[`${name}s`].list.indexOf(item), 1)
      persitShoppingCartItems(state[`${name}s`])
      return {...state, error: false, loading: false}
    }
    case `${name}_Decrease`: {
      const item = state[`${name}s`].list.find(item => item.id == action.payload.id)
      if (item) {
        item.qty = parseInt(item.qty) ? parseInt(item.qty) : 1
        if (item.qty > 0) item.qty -= 1
      }
      persitShoppingCartItems(state[`${name}s`])
      return {...state, error: false, loading: false}
    }
    case `${name}_Increase`: {
      const item = state[`${name}s`].list.find(item => item.id == action.payload.id)
      if (item) {
        item.qty = parseInt(item.qty) ? parseInt(item.qty) : 1
        item.qty += 1
      }
      persitShoppingCartItems(state[`${name}s`])
      return {...state, error: false, loading: false}
    }
    case `${name}_Clear`: {
      state[`${name}s`] = {...state[`${name}s`], list: []}
      persitShoppingCartItems(state[`${name}s`])
      return {...state, error: false, loading: false}
    }
    case `${name}_Checkout_Pending`: {return {...state, error: false, loading: true}}
    case `${name}_Checkout_Success`: {
      state[`${name}s`] = {...state[`${name}s`], list: []}
      persitShoppingCartItems(state[`${name}s`])
      return {...state, error: false, loading: false}
    }
    case `${name}_Checkout_Failure`: {return {...state, error: action.payload.error, loading: false}}
  }
  return state
}
