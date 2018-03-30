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
      try {eval(`persit${name}(state[name])`)} catch(e) {}
      return {...state, loading: false}
    }
    case `${name}_Unload`: {
      state[name] = {}
      try {eval(`persit${name}(state[name])`)} catch(e) {}
      return {...state, loading: false}
    }
    case `${name}_${name}_Pending`: {return {...state, loading: true}}
    case `${name}_${name}_Success`: {
      state[name] = {...state[name], ...action.payload || {}}
      try {eval(`persit${name}(state[name])`)} catch(e) {}
      return {...state, loading: false}
    }
    case `${name}_${name}_Failure`: {return {...state, loading: false}}

    case `${name}_Select`: {
      const item = state[`${name}s`].list.find(o => {
        o.selected = false
        return o.id == action.payload.id
      })
      if (item) item.selected = true
      return {...state, loading: false}
    }
    case `${name}_LoadAll`: {
      const data = state[`${name}s`] = {...state[`${name}s`], ...action.payload || {}}
      return {...state, loading: false}
    }
    case `${name}_SaveAll`: {
      state[`${name}s`] = {...state[`${name}s`], ...action.payload || {}}
      try {eval(`persit${name}s(state['${name}s'])`)} catch(e) {}
      return {...state, loading: false}
    }
    case `${name}_Loadmore`: {
      const filter = state[`${name}s`].filter, page = filter.page || 0
      state[`${name}s`].filter = {...filter, page: page < MAX_PAGE ? page + 1 : page}
      return {...state, loading: false}
    }
    case `${name}_Search`: {
      const filter = state[`${name}s`].filter
      state[`${name}s`].filter = {...filter, ...action.payload || {}, page: 0}
      return {...state, loading: false}
    }
    case `${name}_Reset`: {
      const filter = {...state[`${name}s`].filter, q: '', catid: '', page: 0}
      return {...state, [`${name}s`]: {list: [], filter}, loading: false}
    }

    case `${name}_${name}s_Pending`: {return {...state, loading: true}}
    case `${name}_${name}s_Success`: {
      state[`${name}s`].list = [].concat(state[`${name}s`].list).concat(action.payload).filter(o => o)
      return {...state, loading: false}
    }
    case `${name}_${name}s_Failure`: {return {...state, loading: false}}
  }
}
