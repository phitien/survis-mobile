import {bindActionCreators} from 'redux'
import {actions} from '../actions'
import {CONFIG} from '../constants'

export function mapStateToProps(state) {
  return Object.keys(CONFIG).reduce((rs, k) => {
    rs[k] = state[k]
    return rs
  }, {})
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  }
}
