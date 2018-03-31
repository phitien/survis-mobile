import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
}
export const Device = {
  'device_model': '', 'language': '', 'device_type': '', 'country': '', 'device_id': '', 'number': '',
}
export default {
  loading: false, error: false,
  acts,
  Device,
}
