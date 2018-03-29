import {MAX_PAGE} from '../../constants'

export default function(state, action) {
  switch (action.type) {
    case 'Shop_HighRatingShops_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, HighRatingShops: {...state.HighRatingShops, filter: {...state.HighRatingShops.filter, ...action.payload, page}}, loading: false}
    }
    case 'Shop_HighRatingShops_Search': {
      return {...state, HighRatingShops: {list: [], filter: {...state.HighRatingShops.filter, ...action.payload, page: 0}}, loading: false}
    }
    case 'Shop_HighRatingShops_Reset': {
      return {...state, HighRatingShops: {...state.HighRatingShops, list: [], filter: {...state.HighRatingShops.filter, ...action.payload, page: 0}}, loading: false}
    }

    case 'Shop_HighRatingShops_Pending': {
      return {...state, loading: true}
    }
    case 'Shop_HighRatingShops_Success': {
      const list = [].concat(action.payload).filter(o => o)
      return {...state, HighRatingShops: {...state.HighRatingShops, list}, loading: false}
    }
    case 'Shop_HighRatingShops_Failure': {
      return {...state, loading: false}
    }
  }
}
