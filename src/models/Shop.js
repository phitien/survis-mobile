import {BASEURL} from '../constants'

export const acts = {
  Shop: `api|get|true|body|${BASEURL}?type=shopdetail`,
  Shops: `api|get|true|body|${BASEURL}?type=nearbyshops`,
  Rate: `api|post|true|form|${BASEURL}?type=rating&cmd=set&sourcetype=shop`,
  Review: `api|post|true|form|${BASEURL}?type=reviews&cmd=set`,
  NewShops: `api|get|true|body|${BASEURL}?type=newshops`,
  NewShops_Loadmore: 'NewShops_Loadmore', NewShops_Reset: 'NewShops_Reset', NewShops_Search: 'NewShops_Search',
  HighRatingShops: `api|get|true|body|${BASEURL}?type=highratingshops`,
  HighRatingShops_Loadmore: 'HighRatingShops_Loadmore', HighRatingShops_Reset: 'HighRatingShops_Reset', HighRatingShops_Search: 'HighRatingShops_Search',
  SearchShops: `api|get|true|body|${BASEURL}?type=nearbyshops`,
  SearchShops_Loadmore: 'SearchShops_Loadmore', SearchShops_Reset: 'SearchShops_Reset', SearchShops_Search: 'SearchShops_Search',

}
export const Shop = {
  id: -1,
  name: '',
  description: '',
  address: '',
  created_date: '',
  image: '',
  promotion_image: '',
  latitude: 0,
  longitude: 0,
  email: '',
  phone: '',
  views: '',
  isfeatured: 0,
  ispromoted: 0,
  distance: 0,
  totalrate: 0,
  totalreviews: 0,
  images: []
}
export const Shops = {
  list: [], filter: {q: '', catid: '', page: 0, pagesize: 20},
}
export const NewShops = {
  list: [], filter: {q: '', catid: '', page: 0, pagesize: 20},
}
export const HighRatingShops = {
  list: [], filter: {q: '', catid: '', page: 0, pagesize: 20},
}
export const SearchShops = {
  list: [], filter: {q: '', catid: '', page: 0, pagesize: 20},
}
export default {
  loading: false, error: false, persistent: false, loadmore: true,
  acts,
  Shop,
  Shops,
  NewShops,
  HighRatingShops,
  SearchShops,
}
