import {BASEURL} from '../constants'

export const acts = {
  Loyaltys: `api|get|true|body|${BASEURL}?type=loyalty`,
}
export const Loyalty = {
  id: -1,
  usr_id: -1,
  shop_id: -1,
  name: '',
  address: '',
  numberofvisits: 0,
  numberoforders: 0,
  spentamount: 0,
  latestvisit: '',
  latestorderdate: '',
  image: '',
}
export const Loyaltys = {
  list: [], filter: {page: 0, pagesize: 20},
}
export default {
  loading: false, error: false, persistent: false, loadmore: true,
  acts,
  Loyalty,
  Loyaltys,
}
