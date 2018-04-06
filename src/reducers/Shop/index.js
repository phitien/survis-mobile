import NewShops from './NewShops'
import HighRatingShops from './HighRatingShops'
import SearchShops from './SearchShops'

export default function(name, state, action, initialState) {
  rs = HighRatingShops(name, state, action, initialState)
  if (rs) return rs
  rs = SearchShops(name, state, action, initialState)
  if (rs) return rs
  rs = NewShops(name, state, action, initialState)
  if (rs) return rs
  switch (action.type) {
    case `${name}_Rate_Success`: {
      if (action.payload) {
        const found = state[subname].list.find(o => o.id == action.payload.id)
        if (found) found.totalrate = action.payload.totalrate
      }
      return state
    }
  }
}
