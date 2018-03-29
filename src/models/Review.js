import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
  Reviews: `api|get|true|body|${BASEURL}?type=reviews&cmd=get`,
  Add: `api|post|true|body|${BASEURL}?type=reviews&cmd=set`,
}
export const Review = {
  id: -1,
  usr_id: -1,
  comment: '',
  created_date: '',
  status: '',
  type: '',
  source_id: -1,
}
export const Reviews = {
  list: [], filter: {page: 0, pagesize: 20},
}
export default {
  loading: false, error: false,
  acts,
  Review,
  Reviews,
}
