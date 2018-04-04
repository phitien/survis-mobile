import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Clear: 'Clear', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
  Prizes: `api|get|true|body|${BASEURL}?type=prize`,
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
  loading: false, error: false,
  acts,
  Prize,
  Prizes,
}
