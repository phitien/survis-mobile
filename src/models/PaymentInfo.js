import {BASEURL} from '../constants'

export const acts = {
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
  loading: false, error: false, persistent: true, loadmore: false,
  acts,
  PaymentInfo,
}
