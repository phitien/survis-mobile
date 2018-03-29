import {bindActionCreators} from 'redux'
import {actions} from '../actions'
import * as models from '../models'

export function mapStateToProps(state) {
  return Object.keys(models).reduce((rs, k) => {
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
