import {MAX_PAGE} from '../../constants'

export default function(state, action) {
  switch (action.type) {
    case 'Shop_SearchShops_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, SearchShops: {...state.SearchShops, filter: {...state.SearchShops.filter, ...action.payload, page}}, loading: false}
    }
    case 'Shop_SearchShop_Search': {
      return {...state, SearchShops: {list: [], filter: {...state.SearchShops.filter, ...action.payload, page: 0}}, loading: false}
    }
    case 'Shop_SearchShops_Reset': {
      return {...state, SearchShops: {...state.SearchShops, list: [], filter: {...state.SearchShops.filter, ...action.payload, page: 0}}, loading: false}
    }

    case 'Shop_SearchShops_Pending': {
      return {...state, loading: true}
    }
    case 'Shop_SearchShops_Success': {
      const list = [].concat(action.payload).filter(o => o)
      return {...state, SearchShops: {...state.SearchShops, list}, loading: false}
    }
    case 'Shop_SearchShops_Failure': {
      return {...state, loading: false}
    }
  }
}
