export default function(name, state, action, initialState) {
  switch (action.type) {
    case `${name}_Rate_Pending`: {
      return {...state, loading: true}
    }
    case `${name}_Rate_Success`: {
      if (action.payload) {
        let id = action.payload.id, total = action.payload.totalrate
        state.ShopItem.totalrate = total
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
        state.ShopItem.totalreviews = total
      }
      return {...state, loading: false}
    }
    case `${name}_Review_Failure`: {
      return {...state, loading: false}
    }
  }
}
