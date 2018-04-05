import {MAX_PAGE} from '../../constants'

export default function(state, action) {
  const name = 'Shop', plural = 'HighRatingShops', props = `${name}_${plural}`
  switch (action.type) {
    case `${props}_Loadmore`: {
      let page = state[plural].filter.page
      if (page < MAX_PAGE) page = page + 1
      state[plural].filter = {...state[plural].filter, ...action.payload, page}
      return {...state, loading: false}
    }
    case `${props}_Search`: {
      state[plural].filter = {...state[plural].filter, ...action.payload, page: 0}
      return {...state, loading: false}
    }
    case `${props}_Reset`: {
      state[plural].filter = {...state[plural].filter, ...action.payload, page: 0}
      state[plural].list = []
      return {...state, loading: false}
    }

    case `${props}_Pending`: {
      return {...state, loading: true}
    }
    case `${props}_Success`: {
      state[plural].list = [].concat(state[plural].list).concat(action.payload).filter(o => o)
      return {...state, loading: false}
    }
    case `${props}_Failure`: {
      return {...state, loading: false}
    }

    case `${props}_Rate_Success`: {
      if (action.payload) {
        const found = state[plural].list.find(o => o.id == action.payload.id)
        if (found) found.totalrate = action.payload.totalrate
      }
      return {...state}
    }
  }
}
