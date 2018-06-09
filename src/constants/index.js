import {Platform, Dimensions} from 'react-native'

export const deviceHeight = height = Dimensions.get('window').height
export const deviceWidth = width = Dimensions.get('window').width
export const platform = Platform.OS

export const BASEURL = platform == 'ios' ? 'https://survis.purecode.vn/api/' : 'http://survis.purecode.vn/api/'
export const APPNAME = 'SurVis'
export const PRIMARY = '#f9ae18'
export const RED = '#ed2f2f'
export const GREY = '#ededed'
export const LIGHTGREY = '#f4f4f4'
export const DARK = '#000000'
export const LIGHTDARK = '#898989'
export const MAX_PAGE = 30
export const PRIZE_ITEM_HEIGHT = 240

export const BLANK_IMG = require('../../assets/blank.png')
export const PERSON_IMG = require('../../assets/person.jpg')

export const AUTOPLAY_TIMEOUT = 15
