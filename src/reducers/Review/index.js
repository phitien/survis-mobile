export default function(name, state, action, initialState) {
  switch (action.type) {
    case `${name}_Add_Pending`: {return {...state, loading: true}}
    case `${name}_Add_Success`: {return {...state, ...action.payload, error: false, loading: false}}
    case `${name}_Add_Failure`: {return {...state, error: action.payload.error, loading: false}}
  }
}
