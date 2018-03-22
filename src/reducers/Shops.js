import {CONFIG, MAX_PAGE} from '../constants'

const {Shops} = CONFIG

export default function(state = Shops, action) {
  switch (action.type) {
    case 'Shops_Search': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Shops_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page}}
    }
    case 'Shops_Reset': {
      return {...state, loading: true, list: [], filter: {q: '', catid: '', page: 0}}
    }
    case 'Shops_Detail_Pending': {
      return {...state, loading: true}
    }
    case 'Shops_Detail_Success': {
      return {...state, loading: false, detail: {...state.detail, ...action.payload || {}}}
    }
    case 'Shops_Detail_Failure': {
      return {...state, loading: false}
    }
    case 'Shops_Items_Pending': {
      return {...state, loading: true}
    }
    case 'Shops_Items_Success': {
      state.detail.items = [].concat(action.payload).filter(o => o)
      return {...state, loading: false}
    }
    case 'Shops_Items_Failure': {
      return {...state, loading: false}
    }
    case 'Shops_ItemDetail_Pending': {
      return {...state, loading: true}
    }
    case 'Shops_ItemDetail_Success': {
      delete action.payload.list
      return {...state, loading: false, itemdetail: {...state.detail, ...action.payload || {}}}
    }
    case 'Shops_ItemDetail_Failure': {
      return {...state, loading: false}
    }
    case 'Shops_Get_Pending': {
      return {...state, loading: true}
    }
    case 'Shops_Get_Success': {
      let list = [].concat(state.list, action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'Shops_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return {...state, loading: false}
    }
  }
}
