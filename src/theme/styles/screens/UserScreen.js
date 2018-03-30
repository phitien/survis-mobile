import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY} from '../../../constants'

const size = 80

export default {
  tabBarUnderlineStyle: {
    backgroundColor: PRIMARY,
		height: 1, marginBottom: -1,
  },
  input: {
		height: 32,
	},
	checkbox: {
		marginRight: 5
	},
  avatar_container: {
    width: size, height: size,
    borderRadius: size/2,
    overflow: 'hidden',
    marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10,
  },
  avatar: {
		width: size, height: size,
  },
	logout: {
    position: 'absolute', right: 10, top: 10, padding: 10,
    backgroundColor: 'transparent'
  },
  logout_icon: {
    color: PRIMARY
  },
  tabsProps: {
    tabBarUnderlineStyle: {
      backgroundColor: PRIMARY
    }
  },
  tabProps: {
    tabStyle: {
      backgroundColor: 'white'
    },
    activeTabStyle: {
      color: 'white'
    },
    activeTextStyle: {
      color: PRIMARY
    }
  },
}
