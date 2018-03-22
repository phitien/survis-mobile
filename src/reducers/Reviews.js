import {CONFIG, MAX_PAGE} from '../constants'

const {Reviews} = CONFIG

export default function(state = Reviews, action) {
  switch (action.type) {
    case 'Reviews_Search': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Reviews_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page}}
    }
    case 'Reviews_Reset': {
      return {...state, loading: true, list: [], filter: {itemid: '', shopid: '', page: 0, pagesize: 20}}
    }
    case 'Reviews_Get_Pending': {
      return {...state, loading: true}
    }
    case 'Reviews_Get_Success': {
      let list = [].concat(state.list, action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'Reviews_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return {...state, loading: false}
    }
  }
}
