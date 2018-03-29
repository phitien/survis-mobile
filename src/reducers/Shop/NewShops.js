import {MAX_PAGE} from '../../constants'
import {log} from '../../utils'

export default function(state, action) {
  switch (action.type) {
    case 'Shop_NewShops_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, NewShops: {...state.NewShops, filter: {...state.NewShops.filter, ...action.payload, page}}, loading: false}
    }
    case 'Shop_NewShops_Search': {
      return {...state, NewShops: {list: [], filter: {...state.NewShops.filter, ...action.payload, page: 0}}, loading: false}
    }
    case 'Shop_NewShops_Reset': {
      return {...state, NewShops: {...state.NewShops, list: [], filter: {...state.NewShops.filter, ...action.payload, page: 0}}, loading: false}
    }

    case 'Shop_NewShops_Pending': {
      return {...state, loading: true}
    }
    case 'Shop_NewShops_Success': {
      state.NewShops.list = [].concat(action.payload).filter(o => o)
      return {...state, loading: false}
    }
    case 'Shop_NewShops_Failure': {
      return {...state, loading: false}
    }
    default: {
      return false
    }
  }
}
