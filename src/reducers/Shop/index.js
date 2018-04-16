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
    case `${name}_Rate_Pending`: {
      return {...state, loading: true}
    }
    case `${name}_Rate_Success`: {
      if (action.payload) {
        let id = action.payload.id, total = action.payload.totalrate
        let found = state.Shops.list.find(o => o.id == id)
        if (found) found.totalrate = total
        found = state.HighRatingShops.list.find(o => o.id == id)
        if (found) found.totalrate = total
        found = state.SearchShops.list.find(o => o.id == id)
        if (found) found.totalrate = total
        found = state.NewShops.list.find(o => o.id == id)
        if (found) found.totalrate = total
        if (state.Shop && state.Shop.id == id) state.Shop.totalrate = total
      }
      return {...state, loading: false}
    }
    case `${name}_Rate_Failure`: {
      return {...state, loading: false}
    }

    case `${name}_Review_Pending`: {
      return {...state, loading: true}
    }
    case `${name}_Review_Success`: {
      if (action.payload) {
        let id = action.payload.id, total = action.payload.totalreviews
        let found = state.Shops.list.find(o => o.id == id)
        if (found) found.totalreviews = total
        found = state.HighRatingShops.list.find(o => o.id == id)
        if (found) found.totalreviews = total
        found = state.SearchShops.list.find(o => o.id == id)
        if (found) found.totalreviews = total
        found = state.NewShops.list.find(o => o.id == id)
        if (found) found.totalreviews = total
        if (state.Shop && state.Shop.id == id) state.Shop.totalreviews = total
      }
      return {...state, loading: false}
    }
    case `${name}_Review_Failure`: {
      return {...state, loading: false}
    }
  }
}
