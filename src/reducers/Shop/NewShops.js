import {MAX_PAGE} from '../../constants'

export default function(name, state, action, initialState) {
  const subname = 'NewShops', props = `${name}_${subname}`
  switch (action.type) {
    case `${props}_Loadmore`: {
      let page = state[subname].filter.page
      if (page < MAX_PAGE) page = page + 1
      state[subname].filter = {...state[subname].filter, ...action.payload, page}
      return {...state, loading: false}
    }
    case `${props}_Search`: {
      state[subname].filter = {...state[subname].filter, ...action.payload, page: 0}
      return {...state, loading: false}
    }
    case `${props}_Reset`: {
      state[subname].filter = {...state[subname].filter, ...action.payload, page: 0}
      state[subname].list = []
      return {...state, loading: false}
    }

    case `${props}_Pending`: {
      return {...state, loading: true}
    }
    case `${props}_Success`: {
      state[subname].list = [].concat(state[subname].list).concat(action.payload).filter(o => o)
      return {...state, loading: false}
    }
    case `${props}_Failure`: {
      return {...state, loading: false}
    }
  }
}
