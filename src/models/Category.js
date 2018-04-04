import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Clear: 'Clear', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
  Categorys: `api|get|true|body|${BASEURL}?type=category`,
}
export const Category = {
  id: -1,
  name: '',
  image: '',
}
export const Categorys = {
  list: [], filter: {catid: '', page: 0, pagesize: 20},
}
export default {
  loading: false, error: false,
  acts,
  Category,
  Categorys,
}
