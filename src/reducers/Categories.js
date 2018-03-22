import {CONFIG, MAX_PAGE} from '../constants'

const {Categories} = CONFIG

export default function(state = Categories, action) {
  switch (action.type) {
    case 'Categories_Search': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Categories_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page}}
    }
    case 'Categories_Reset': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Categories_Get_Pending': {
      return {...state, loading: true}
    }
    case 'Categories_Get_Success': {
      const list = [].concat(action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'Categories_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}
