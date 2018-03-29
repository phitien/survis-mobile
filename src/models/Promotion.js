import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
  Promotions: `api|get|true|body|${BASEURL}?type=promotions`,
  Promotion: `api|get|true|body|${BASEURL}?type=promotiondetail`,
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
  loading: false, error: false,
  acts,
  Promotion,
  Promotions,
}
