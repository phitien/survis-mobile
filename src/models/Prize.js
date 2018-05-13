import {BASEURL} from '../constants'

export const acts = {
  Prizes: `api|get|true|form|${BASEURL}?type=prize`,
  Submit: `api|post|true|form|${BASEURL}?type=prizepick`,
  Scan: `api|post|true|form|${BASEURL}?type=scan`,
}
export const Prize = {
  id: -1,
  description: '',
  image: '',
  toptext: '',
  sponsor_image: '',
  sponsor_name: '',
}
export const Prizes = {
  list: [], filter: {page: 0, pagesize: 20},
}
export default {
  loading: false, error: false, persistent: false, loadmore: false,
  acts,
  Prize,
  Prizes,
}
