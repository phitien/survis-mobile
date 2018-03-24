export const BASEURL = 'https://survis.purecode.vn/api/'
export const APPNAME = 'SurVis'
export const PRIMARY = '#f9ae18'
export const ERROR = '#ed2f2f'
export const GREY = 'rgba(0,0,0,.1)'
export const MAX_PAGE = 30
export const PRIZE_ITEM_HEIGHT = 240

export const SET_PUSH_TOKEN = 'SET_PUSH_TOKEN'
export const SET_PUSH_TOKEN_FAIL = 'SET_PUSH_TOKEN_FAIL'
export const SEND_PUSH_TOKEN = 'SEND_PUSH_TOKEN'
export const UPDATE_PUSH_TOKEN = 'UPDATE_PUSH_TOKEN'

export const BLANK_IMG = require('../../assets/blank.jpg')
export const PERSON_IMG = require('../../assets/person.jpg')

export const AUTOPLAY_TIMEOUT = 15

export const CONFIG = {
  User: {
    token: null,
    usr_id: null,
    usr_mobile: null,
    usr_fname: null,
    usr_lname: null,
    usr_birthday: null,
    usr_status: null,
    usr_email: null,
    usr_password: null,
    usr_avatar: null,
    usr_created_date: null,
    default: {
      token: null,
      usr_id: null,
      usr_mobile: null,
      usr_fname: null,
      usr_lname: null,
      usr_birthday: null,
      usr_status: null,
      usr_email: null,
      usr_password: null,
      usr_avatar: null,
      usr_created_date: null,
    },
    loading: false,
    editingUser: false,
    editingPassword: false,
    error: false,
    actions: {
      Load: 'Load',
      Error: 'Error',
      EditUser: 'EditUser',
      EditPassword: 'EditPassword',
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=profile&cmd=get`,
      Update: `post|true|form|${BASEURL}?type=profile&cmd=set`,
      Login: `post|true|form|${BASEURL}?type=login`,
      Logout: `post|true|form|${BASEURL}?type=logout`,
      Register: `post|true|form|${BASEURL}?type=register`,
      ForgetPassword: `post|true|form|${BASEURL}?type=forgetpwd`,
      ChangePassword: `post|true|form|${BASEURL}?type=password`,
    }
  },
  Categories: {
    list: [], filter: {catid: '', page: 0, pagesize: 20}, count: 0, loading: false,
    actions: {
      Loadmore: 'Loadmore',
      Search: 'Search',
      Reset: 'Reset',
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=category`,
    }
  },
  Shops: {
    list: [], filter: {q: '', catid: '', page: 0, pagesize: 10}, count: 0, loading: false,
    detail: {items: []},
    itemdetail: {},
    actions: {
      Reset: 'Reset',
      Loadmore: 'Loadmore',
      Search: 'Search'
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=nearbyshops`,
      Detail: `get|true|body|${BASEURL}?type=shopdetail`,
      Items: `get|true|body|${BASEURL}?type=items`,
      ItemDetail: `get|true|body|${BASEURL}?type=itemdetail`,
    }
  },
  Search: {
    list: [], filter: {q: '', catid: '', page: 0, pagesize: 20}, count: 0, loading: false,
    actions: {
      Reset: 'Reset',
      Loadmore: 'Loadmore',
      Search: 'Search'
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=nearbyshops`,
    }
  },
  Promotions: {
    list: [], filter: {page: 0, pagesize: 20}, count: 0, loading: false,
    detail: {items: [], shop_info: {}},
    actions: {
      Loadmore: 'Loadmore',
      Reset: 'Reset'
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=promotions`,
      Detail: `get|true|body|${BASEURL}?type=promotiondetail`,
    }
  },
  NewShops: {
    list: [], filter: {page: 0, pagesize: 20}, count: 0, loading: false,
    actions: {
      Loadmore: 'Loadmore',
      Reset: 'Reset'
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=newshops`
    }
  },
  HighRatingShops: {
    list: [], filter: {page: 0, pagesize: 20}, count: 0, loading: false,
    actions: {
      Loadmore: 'Loadmore',
      Reset: 'Reset'
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=highratingshops`
    }
  },
  Prizes: {
    list: [], filter: {page: 0, pagesize: 10}, count: 0, loading: false,
    error: false,
    actions: {
      Loadmore: 'Loadmore',
      Reset: 'Reset',
      Pick: 'Pick',
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=prize`,
      Submit: `post|true|form|${BASEURL}?type=prizepick`,
    }
  },
  Histories: {
    list: [], filter: {page: 0, pagesize: 10}, count: 0, loading: false,
    actions: {
      Loadmore: 'Loadmore',
      Reset: 'Reset'
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=history`
    }
  },
  Loyalties: {
    list: [], filter: {page: 0, pagesize: 10}, count: 0, loading: false,
    actions: {
      Loadmore: 'Loadmore',
      Reset: 'Reset'
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=loyalty`
    }
  },
  Notifications: {
    list: [], filter: {page: 0, pagesize: 10}, count: 0, loading: false,
    actions: {
      Loadmore: 'Loadmore',
      Reset: 'Reset'
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=notification&cmd=get`
    }
  },
  Reviews: {
    list: [], filter: {itemid: '', shopid: '', page: 0, pagesize: 10}, count: 0, loading: false,
    actions: {
      Search: 'Search',
      Loadmore: 'Loadmore',
      Reset: 'Reset'
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=reviews&cmd=get`,
    }
  },
  PaymentInfo: {
    ucc_name: '',
    ucc_num: '',
    ucc_cvc: '',
    ucc_expire: '',
    ucc_type: 'master',
    bill_address: '',
    default: {
      ucc_name: '',
      ucc_num: '',
      ucc_cvc: '',
      ucc_expire: '',
      ucc_type: 'master',
      bill_address: '',
    },
    loading: false,
    actions: {
      Load: 'Load',
    },
    apiActions: {
      Get: `get|true|body|${BASEURL}?type=paymentinfo&cmd=get`,
      Update: `post|true|body|${BASEURL}?type=paymentinfo&cmd=set`,
    }
  },
  ShoppingCart: {
    list: [], filter: {page: 0, pagesize: 10}, count: 0, loading: false,
    actions: {
      Add: 'Add',
      Remove: 'Remove',
      Clear: 'Clear',
      Increase: 'Increase',
      Decrease: 'Decrease',
      Load: 'Load',
    },
    apiActions: {
      Place: `post|true|body|${BASEURL}?type=placeorder`,
    }
  },
  Location: {
    latitude: 0,
    longitude: 0,
    actions: {
      Update: 'Update'
    }
  },
  Device: {
    id: '',
    actions: {
      Update: 'Update'
    }
  },
  Push: {
    actions: {
      Receive: 'Receive',
      Send: 'Send',
    }
  },
  PaymentMethods: {
    list: [{label: 'Visa ', value: 'visa'}, {label: 'Master ', value: 'master'}], count: 0, loading: false,
  },
  Screen: {
    current: 'HomeScreen',
    actions: {
      Set: 'Set'
    }
  }
}
