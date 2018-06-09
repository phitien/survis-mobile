import {BASEURL} from '../constants'

export const acts = {
  Luckys: `api|get|true|body|${BASEURL}?type=lucky`,
}
export const Lucky = {
  id: -1,
  usr_id: -1,
  shop_id: -1,
  name: '',
  address: '',
  numberofvisits: 0,
  visits: 0,
  spentamount: 0,
  latestvisit: '',
  latestorderdate: '',
  image: '',
}
export const Luckys = {
  list: [], filter: {page: 0, pagesize: 20},
}
export default {
  loading: false, error: false, persistent: false, loadmore: true,
  acts,
  Lucky,
  Luckys,
}
