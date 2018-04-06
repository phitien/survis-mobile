export default function(name, state, action, initialState) {
  switch (action.type) {
    case `${name}_Submit_Pending`: {return {...state, loading: true}}
    case `${name}_Submit_Success`: {return {...state, ...action.payload, error: false, loading: false}}
    case `${name}_Submit_Failure`: {return {...state, ...action.payload, loading: false}}
    case `${name}_Scan_Pending`: {return {...state, message: false, error: false, loading: true}}
    case `${name}_Scan_Success`: {return {...state, ...action.payload, error: false, loading: false}}
    case `${name}_Scan_Failure`: {return {...state, ...action.payload, loading: false}}
  }
}
