import {BASEURL} from '../constants'

export const acts = {
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
  loading: false, error: false, persistent: false, loadmore: true,
  acts,
  History,
  Historys,
}
