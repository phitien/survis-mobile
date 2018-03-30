import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, ERROR} from '../../../constants'

export default {
	container: {
	},
  tabBarUnderlineStyle: {
    backgroundColor: PRIMARY,
		height: 1, marginBottom: -1,
  },
  heading: {
    fontSize: 14, fontWeight: 'bold',
    marginTop: 10
  },
  error: {
    fontSize: 12, fontStyle: 'italic', color: ERROR,
    marginTop: 10, textAlign: 'center'
  },
  checkbox: {
    marginRight: 20
  },
  agree: {
    marginTop: 10,
  },
	button: {
		marginTop: 20,
	},
	forget_password: {
		display: 'flex', marginTop: 20, justifyContent: 'flex-end',
	},
	forget_password_text: {
		color: 'rgb(243,137,4)'
	},
	login_with_facebook: {
		marginBottom: 10, backgroundColor: 'rgb(67,72,77)'
	},
  subtitleBlack: {
    fontSize: 16
  },
  paddingLeft: {
    paddingLeft: 18
  },
  commonView: {
    padding: 18
  },
  amountView: {
    margin: 10,
    borderColor: '#4740c7',
    alignItems: 'center',
    borderRadius: 7
  },
  cardView:{
    borderRadius:5,
    borderWidth: 0.5,
    width:150,
    height: 100,
    backgroundColor: 'white',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  summaryView:  {
    margin: 30,
    borderBottomWidth: 0.5,
    padding: 20
  },
  circleStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    left: 10
  },
  heavyBorder: {
    borderWidth:2
  },
  heavyMargin: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15
  },
  commonShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
}
