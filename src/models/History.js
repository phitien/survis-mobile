import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
  Historys: `api|get|true|body|${BASEURL}?type=history`,
}
export const History = {
  id: -1,
  usr_id: -1,
  orderdate: '',
  name: '',
  description: '',
  price: 0,
  quantity: 0,
  amount: 0,
  image: '',
}
export const Historys = {
  list: [], filter: {page: 0, pagesize: 20},
}
export default {
  loading: false, error: false,
  acts,
  History,
  Historys,
}
