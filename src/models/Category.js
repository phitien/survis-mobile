import {BASEURL} from '../constants'

export const acts = {
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
  loading: false, error: false, persistent: false, loadmore: false,
  acts,
  Category,
  Categorys,
}
