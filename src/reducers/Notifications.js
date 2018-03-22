import {CONFIG, MAX_PAGE} from '../constants'

const {Notifications} = CONFIG

export default function(state = Notifications, action) {
  switch (action.type) {
    case 'Notifications_Loadmore': {
      let page = state.filter.page
      if (page < MAX_PAGE) page = page + 1
      return {...state, loading: true, filter: {...state.filter, ...action.payload, page}}
    }
    case 'Notifications_Reset': {
      return {...state, loading: true, list: [], filter: {...state.filter, ...action.payload, page: 0}}
    }
    case 'Notifications_Get_Pending': {
      return {...state, loading: true}
    }
    case 'Notifications_Get_Success': {
      const list = [].concat(state.list, action.payload).filter(o => o)
      return {...state, loading: false, list, count: list.length}
    }
    case 'Notifications_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}
