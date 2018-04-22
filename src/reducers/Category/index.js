export default function(name, state, action, initialState) {
  const subname = `${name}s`, props = `${name}_${subname}`
  const loadmore = initialState
  switch (action.type) {
    case `${props}_Pending`: {
      return {...state, loading: true}
    }
    case `${props}_Success`: {
      let filter = state[subname].filter, {current} = filter
      if (!current) {
        state[subname].list = [].concat(loadmore ? state[subname].list : null).concat(action.payload)
          .filter(o => o)
          .reduce((rs, o) => {
            if (!rs.find(c => c.id == o.id)) rs.push(o)
            return rs
          }, [])
      }
      else {
        current.children = [].concat(action.payload).filter(o => o)
        current.children.map(o => o.parent = current)
        current.loaded = true
      }
      return {...state, loading: false, loaded: true}
    }
    case `${props}_Failure`: {
      return {...state, loading: false}
    }
  }
}
