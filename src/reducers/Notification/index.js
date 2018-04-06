export default function(name, state, action, initialState) {
  const subname = `${name}s`, props = `${name}_${subname}`
  switch (action.type) {
    case `${name}_Read_Pending`: {
      return {...state, loading: true}
    }
    case `${name}_Read_Success`: {
      const noti = action.payload || {}
      const found = state[subname].list.find(o => action.payload.id)
      if (found) found.is_read = true
      return {...state, loading: false}
    }
    case `${name}_Read_Failure`: {
      return {...state, loading: false}
    }
  }
}
