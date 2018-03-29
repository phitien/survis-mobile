import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
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
  loading: false, error: false,
  acts,
  Loyalty,
  Loyaltys,
}
