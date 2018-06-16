import {BASEURL} from '../constants'

export const acts = {
  Reviews: `api|get|true|body|${BASEURL}?type=reviews`,
  Add: `api|post|true|form|${BASEURL}?type=reviewadd`,
}
export const Review = {
  id: -1,
  usr_id: -1,
  comment: '',
  status: '',
  type: '',
  source_id: -1,
}
export const Reviews = {
  list: [], filter: {page: 0, pagesize: 20},
}
export default {
  loading: false, error: false, persistent: false, loadmore: false,
  acts,
  Review,
  Reviews,
}
