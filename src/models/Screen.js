import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
}
export const Screen = {
  id: '',
  params: {},
}
export default {
  loading: false, error: false,
  acts,
  Screen,
}
