import {CONFIG, MAX_PAGE} from '../constants'

const {PaymentMethods} = CONFIG

export default function(state = PaymentMethods, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}
