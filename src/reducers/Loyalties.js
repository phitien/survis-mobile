import {CONFIG, MAX_PAGE} from '../constants'

const {Loyalties} = CONFIG

export default function(state = Loyalties, action) {
  switch (action.type) {
    case 'Loyalties_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page}}
    }
    case 'Loyalties_Reset': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Loyalties_Get_Pending': {
      return {...state, loading: true}
    }
    case 'Loyalties_Get_Success': {
      const list = [].concat(state.list, action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'Loyalties_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}
