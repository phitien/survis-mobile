import {CONFIG, MAX_PAGE} from '../constants'

const {Histories} = CONFIG

export default function(state = Histories, action) {
  switch (action.type) {
    case 'Histories_Loadmore': {
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page: (state.filter.page || 0) + 1}}
    }
    case 'Histories_Reset': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Histories_Get_Pending': {
      return {...state, loading: true}
    }
    case 'Histories_Get_Success': {
      const list = [].concat(state.list, action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'Histories_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}
