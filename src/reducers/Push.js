import {CONFIG, MAX_PAGE} from '../constants'

const {Push} = CONFIG

export default function(state = Push, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}
