import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
}
export const PaymentInfo = {
  id: -1,
  ucc_name: '',
  ucc_num: '',
  ucc_cvc: '',
  ucc_expire: '',
  ucc_type: '',
  bill_address: '',
}
export default {
  loading: false, error: false,
  acts,
  PaymentInfo,
}
