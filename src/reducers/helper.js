import {MAX_PAGE} from '../constants'
import {AsyncStorage} from 'react-native'
import {APPNAME} from '../constants'
import {log} from '../utils'

export async function persitUser(User) {
  await AsyncStorage.setItem(`${APPNAME}:User`, JSON.stringify(User))
}

export async function persitPaymentInfo(PaymentInfo) {
  await AsyncStorage.setItem(`${APPNAME}:PaymentInfo`, JSON.stringify(PaymentInfo))
}

export async function persitShoppingCartItems(ShoppingCartItems) {
  await AsyncStorage.setItem(`${APPNAME}:ShoppingCartItems`, JSON.stringify(ShoppingCartItems))
}

export function stateToProps(name, state, action) {
  const plural = `${name}s`, prop = `${name}_${name}`, props = `${name}_${plural}`

  switch (action.type) {
    case `${name}_Load`: {
      const data = state[name] = {...state[name], ...action.payload || {}}
      return {...state, loading: false}
    }
    case `${name}_Error`: {
      return {...state, error: action.payload, loading: false}
    }
    case `${name}_Save`: {
      state[name] = {...state[name], ...action.payload || {}}
      try {eval(`persit${name}(state['${name}'])`)} catch(e) {}
      return {...state, loading: false}
    }
    case `${name}_Unload`: {
      state[name] = {}
      try {eval(`persit${name}(state[name])`)} catch(e) {}
      return {...state, loading: false}
    }
    case `${prop}_Pending`: {return {...state, loading: true}}
    case `${prop}_Success`: {
      state[name] = {...state[name], ...action.payload || {}}
      try {eval(`persit${name}(state[name])`)} catch(e) {log('api-error', e)}
      return {...state, loading: false}
    }
    case `${prop}_Failure`: {return {...state, loading: false}}

    //plural
    case `${name}_Select`: {
      const item = state[plural].list.find(o => {
        o.selected = false
        return o.id == action.payload.id
      })
      if (item) item.selected = true
      return {...state, loading: false}
    }
    case `${name}_LoadAll`: {
      const data = state[plural] = {...state[plural], ...action.payload || {}}
      return {...state, loading: false}
    }
    case `${name}_SaveAll`: {
      state[plural] = {...state[plural], ...action.payload || {}}
      try {eval(`persit${plural}s(state['${plural}'])`)} catch(e) {}
      return {...state, loading: false}
    }

    case `${props}_Loadmore`: {
      let page = state[plural].filter.page
      if (page < MAX_PAGE) page = page + 1
      state[plural].filter = {...state[plural].filter, ...action.payload, page}
      return {...state, loading: false}
    }
    case `${props}_Search`: {
      state[plural].filter = {...state[plural].filter, ...action.payload, page: 0}
      return {...state, loading: false}
    }
    case `${props}_Reset`: {
      state[plural].filter = {...state[plural].filter, ...action.payload, page: 0}
      state[plural].list = []
      return {...state, loading: false}
    }

    case `${props}_Pending`: {return {...state, loading: true}}
    case `${props}_Success`: {
      state[plural].list = [].concat(state[plural].list).concat(action.payload).filter(o => o)
      return {...state, loading: false}
    }
    case `${props}_Failure`: {return {...state, loading: false}}
  }
}
