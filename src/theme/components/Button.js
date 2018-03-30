export default (variables) => {
	const {PRIMARY, platformStyle, platform} = variables
	return {
		backgroundColor: PRIMARY,
		borderRadius: 3,
		height: 32,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		'NativeBase.Text': {
			marginLeft: 0,
			marginRight: 0,
			color: 'white',
			fontSize: 14,
			paddingHorizontal: 16,
			textAlign: 'center',
		},
		'NativeBase.Icon': {
			color: variables.inverseTextColor,
			fontSize: 20,
		},
		'NativeBase.IconNB': {
			color: variables.inverseTextColor,
			fontSize: 20,
		},
		'.iconLeft': {
			'NativeBase.Text': {marginLeft: 0,},
			'NativeBase.IconNB': {marginRight: 0, marginLeft: 16,},
			'NativeBase.Icon': {marginRight: 0, marginLeft: 16,},
		},
		'.iconRight': {
			'NativeBase.Text': {marginRight: 0,},
			'NativeBase.IconNB': {marginLeft: 0, marginRight: 16,},
			'NativeBase.Icon': {marginLeft: 0, marginRight: 16,},
		},
		'.disabled': {backgroundColor: variables.btnDisabledBg,},
		'.transparent': {
			backgroundColor: 'transparent',
			'.theme': {
				'NativeBase.Text': {color: PRIMARY,},
				'NativeBase.IconNB': {color: PRIMARY,},
				'NativeBase.Icon': {color: PRIMARY,},
			},
		},
		'.block': {justifyContent: 'center',alignSelf: 'stretch',},
		'.full': {justifyContent: 'center',alignSelf: 'stretch',borderRadius: 0,},
		'.vertical': {flexDirection: 'column',height: null,},
		'.small': {
			height: 32,
			'NativeBase.Text': {fontSize: 14,},
		},
		'.large': {
			height: 60,
			'NativeBase.Text': {fontSize: 22},
		},
	}
}
