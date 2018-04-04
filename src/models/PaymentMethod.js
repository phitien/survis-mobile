import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Clear: 'Clear', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
}
export const PaymentMethod = {
  label: '',
  value: '',
}
export const PaymentMethods = {
  list: [], filter: {catid: '', page: 0, pagesize: 20},
}
export default {
  loading: false, error: false,
  acts,
  PaymentMethod,
  PaymentMethods,
}
