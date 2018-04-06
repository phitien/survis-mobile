import {BASEURL} from '../constants'

export const acts = {
  Notifications: `api|get|true|body|${BASEURL}?type=notification&cmd=get`,
  Read: `api|post|true|form|${BASEURL}?type=managenoti&cmd=read`,
}
export const Notification = {
  id: -1,
  title: '',
  message: '',
  image: '',
  date: '',
  is_read: false,
  type: '',
}
export const Notifications = {
  list: [], filter: {page: 0, pagesize: 20},
}
export default {
  loading: false, error: false, persistent: false, loadmore: true,
  acts,
  Notification,
  Notifications,
}
