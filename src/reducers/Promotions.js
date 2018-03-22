import {CONFIG, MAX_PAGE} from '../constants'

const {Promotions} = CONFIG

export default function(state = Promotions, action) {
  switch (action.type) {
    case 'Promotions_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, filter: {...state.filter, ...action.payload, page}}
    }
    case 'Promotions_Reset': {
      return {...state, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Promotions_Detail_Pending': {
      return {...state, loading: true}
    }
    case 'Promotions_Detail_Success': {
      return {...state, detail: action.payload || null, loading: false}
    }
    case 'Promotions_Detail_Failure': {
      return {...state, loading: false}
    }
    case 'Promotions_Get_Pending': {
      return {...state, loading: true}
    }
    case 'Promotions_Get_Success': {
      const list = [].concat(state.list, action.payload).filter(o => o)
      return {...state, list, count: list.length, loading: false}
    }
    case 'Promotions_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}
