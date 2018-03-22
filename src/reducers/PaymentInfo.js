import {CONFIG, MAX_PAGE} from '../constants'

const {PaymentInfo} = CONFIG

export default function(state = PaymentInfo, action) {
  switch (action.type) {
    case 'PaymentInfo_Get_Pending': {
      return {...state, loading: true}
    }
    case 'PaymentInfo_Get_Success': {
      return {...state, loading: false, ...action.payload}
    }
    case 'PaymentInfo_Get_Failure': {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}
