import {BASEURL} from '../constants'

export const acts = {
  Error: 'Error', LoadAll: 'LoadAll', SaveAll: 'SaveAll', Loadmore: 'Loadmore', Load: 'Load', Clear: 'Clear', Save: 'Save', Unload: 'Unload', Reset: 'Reset', Search: 'Search', Select: 'Select',
  User: `api|get|true|body|${BASEURL}?type=profile&cmd=get`,
  Update: `api|post|true|form|${BASEURL}?type=profile&cmd=set`,
  Login: `api|post|true|form|${BASEURL}?type=login`,
  Logout: `api|post|true|form|${BASEURL}?type=logout`,
  Register: `api|post|true|form|${BASEURL}?type=register`,
  ForgetPassword: `api|post|true|form|${BASEURL}?type=forgetpwd`,
  ChangePassword: `api|post|true|form|${BASEURL}?type=password`,
}
export const User = {
  token: '',
  usr_id: -1,
  usr_mobile: '',
  usr_fname: '',
  usr_lname: '',
  usr_birthday: '',
  usr_status: '',
  usr_email: '',
  usr_password: '',
  usr_avatar: '',
  usr_created_date: '',
}
export default {
  loading: false, error: false,
  acts,
  User,
}
