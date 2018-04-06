import {BASEURL} from '../constants'

export const acts = {
}
export const PaymentMethod = {
  label: '',
  value: '',
}
export const PaymentMethods = {
  list: [], filter: {catid: '', page: 0, pagesize: 20},
}
export default {
  loading: false, error: false, persistent: false, loadmore: false,
  acts,
  PaymentMethod,
  PaymentMethods,
}
