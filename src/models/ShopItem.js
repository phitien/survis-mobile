import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Clear: 'Clear', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
  ShopItems: `api|get|true|body|${BASEURL}?type=items`,
  ShopItem: `api|get|true|body|${BASEURL}?type=itemdetail`,
}
export const ShopItem = {
  id: -1,
  name: '',
  description: '',
  price: 0,
  market_price: 0,
  created_date: '',
  published_date: '',
  expired_date: '',
  shop_id: -1,
  image: '',
  views: '',
  images: [],
}
export const ShopItems = {
  list: [], filter: {q: '', catid: '', shopid: '', page: 0, pagesize: 20},
}
export default {
  loading: false, error: false,
  acts,
  ShopItem,
  ShopItems,
}
