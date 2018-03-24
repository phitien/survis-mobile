import {CONFIG, MAX_PAGE} from '../constants'

const {Search} = CONFIG

export default function(state = Search, action) {
  switch (action.type) {
    case 'Search_Search': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Search_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page}}
    }
    case 'Search_Reset': {
      return {...state, loading: true, list: [], filter: {q: '', catid: '', page: 0, pagesize: 20}}
    }
    case 'Search_Get_Pending': {
      return {...state, loading: true}
    }
    case 'Search_Get_Success': {
      let list = [].concat(state.list, action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'Search_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return {...state, loading: false}
    }
  }
}
