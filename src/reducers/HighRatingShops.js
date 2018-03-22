import {CONFIG, MAX_PAGE} from '../constants'

const {HighRatingShops} = CONFIG

export default function(state = HighRatingShops, action) {
  switch (action.type) {
    case 'HighRatingShops_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page}}
    }
    case 'HighRatingShops_Reset': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'HighRatingShops_Get_Pending': {
      return {...state, loading: true}
    }
    case 'HighRatingShops_Get_Success': {
      const list = [].concat(action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'HighRatingShops_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}
