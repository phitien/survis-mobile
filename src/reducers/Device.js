import {CONFIG, MAX_PAGE} from '../constants'

const {Device} = CONFIG

export default function(state = Device, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}
