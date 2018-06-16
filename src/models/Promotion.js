import {BASEURL} from '../constants'

export const acts = {
  Promotions: `api|get|true|body|${BASEURL}?type=promotions`,
  Promotion: `api|get|true|body|${BASEURL}?type=promotion`,
}
export const apis = {
}
export const Promotion = {
  id: -1,
  shop_id: -1,
  image: '',
  toptext: '',
  toptext_color: '',
  toptext_bgcolor: '',
  toptext_fontsize: '',
  bigtitle: '',
  smalltitle: '',
  description: '',
  shop_info: '',
  items: [],
}
export const Promotions = {
  list: [], filter: {page: 0, pagesize: 20},
}
export default {
  loading: false, error: false, persistent: false, loadmore: false,
  acts,
  Promotion,
  Promotions,
}
