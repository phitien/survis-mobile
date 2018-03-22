import {CONFIG, MAX_PAGE} from '../constants'

const {Location} = CONFIG

export default function(state = Location, action) {
  switch (action.type) {
    case 'Location_Update': {
      return {...state, ...action.payload}
    }
    default: {
      return state
    }
  }
}
