import {BASEURL} from '../constants'

export const acts = {
  Add: 'Add', Remove: 'Remove', Clear: 'Clear', Increase: 'Increase', Decrease: 'Decrease',
  Checkout: `api|post|true|body|${BASEURL}?type=placeorder`,
}
export const ShoppingCartItem = {
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
  qty: 0,
}
export const ShoppingCartItems = {
  list: [], filter: {page: 0, pagesize: 20},
}
export default {
  loading: false, error: false, persistent: true, loadmore: false,
  acts,
  ShoppingCartItem,
  ShoppingCartItems,
}
