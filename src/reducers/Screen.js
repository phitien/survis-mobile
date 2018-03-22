import {CONFIG, MAX_PAGE} from '../constants'

const {Screen} = CONFIG

export default function(state = Screen, action) {
  switch (action.type) {
    case 'Screen_Set': {
      return {...state, ...action.payload}
    }
    default: {
      return state
    }
  }
}
