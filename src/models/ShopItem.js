import {BASEURL} from '../constants'

export const acts = {
  ShopItems: `api|get|true|body|${BASEURL}?type=items`,
  ShopItem: `api|get|true|body|${BASEURL}?type=itemdetail`,
  Rate: `api|post|true|form|${BASEURL}?type=rating&cmd=set&sourcetype=item`,
  Review: `api|post|true|form|${BASEURL}?type=reviewadd`,
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
  loading: false, error: false, persistent: false, loadmore: false,
  acts,
  ShopItem,
  ShopItems,
}
