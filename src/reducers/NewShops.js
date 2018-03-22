import {CONFIG, MAX_PAGE} from '../constants'

const {NewShops} = CONFIG

export default function(state = NewShops, action) {
  switch (action.type) {
    case 'NewShops_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page}}
    }
    case 'NewShops_Reset': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'NewShops_Get_Pending': {
      return {...state, loading: true}
    }
    case 'NewShops_Get_Success': {
      const list = [].concat(state.list, action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'NewShops_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}
