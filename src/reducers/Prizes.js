import {CONFIG, MAX_PAGE} from '../constants'

const {Prizes} = CONFIG

export default function(state = Prizes, action) {
  switch (action.type) {
    case 'Prizes_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page}}
    }
    case 'Prizes_Reset': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Prizes_Get_Pending': {
      return {...state, loading: true}
    }
    case 'Prizes_Get_Success': {
      const list = [].concat(state.list, action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'Prizes_Get_Failure': {
      return {...state, loading: false}
    }
    case 'Prizes_Pick_Pending': {
      return {...state, loading: true, picked: undefined}
    }
    case 'Prizes_Pick_Success': {
      return {...state, loading: false, picked: true}
    }
    case 'Prizes_Pick_Failure': {
      return {...state, loading: false, picked: false}
    }
    default: {
      return state
    }
  }
}
