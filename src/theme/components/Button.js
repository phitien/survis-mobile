import variable from '../variables/platform'
const {PRIMARY} = variable

export default (variables) => {
	const platformStyle = variables.platformStyle
	const platform = variables.platform

	const buttonTheme = {
		paddingVertical: variables.buttonPadding,
		backgroundColor: PRIMARY,
		borderRadius: variables.borderRadiusBase,
		borderColor: PRIMARY,
		borderWidth: null,
		height: 45,
		alignSelf: 'flex-start',
		flexDirection: 'row',
		elevation: 2,
		shadowColor: platformStyle === 'material' ? '#000' : undefined,
		shadowOffset: platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
		shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
		shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
		alignItems: 'center',
		justifyContent: 'space-between',
		'NativeBase.Text': {
			fontFamily: variables.btnFontFamily,
			marginLeft: 0,
			marginRight: 0,
			color: variables.inverseTextColor,
			fontSize: variables.btnTextSize,
			lineHeight: variables.btnLineHeight,
			paddingHorizontal: 16,
			backgroundColor: 'transparent',
		},
		'NativeBase.Icon': {
			color: variables.inverseTextColor,
			fontSize: 24,
			marginHorizontal: 2,
			paddingTop: platform === 'ios' ? 2 : undefined,
		},
		'NativeBase.IconNB': {
			color: variables.inverseTextColor,
			fontSize: 24,
			marginHorizontal: 16,
			paddingTop: platform === 'ios' ? 2 : undefined,
		},
		'.iconLeft': {
			'NativeBase.Text': {marginLeft: 0,},
			'NativeBase.IconNB': {marginRight: 0,marginLeft: 16,},
			'NativeBase.Icon': {marginRight: 0,marginLeft: 16,},
		},
		'.iconRight': {
			'NativeBase.Text': {marginRight: 0,},
			'NativeBase.IconNB': {marginLeft: 0,marginRight: 16,},
			'NativeBase.Icon': {marginLeft: 0,marginRight: 16,},
		},
		'.disabled': {backgroundColor: variables.btnDisabledBg,},
		'.theme': {backgroundColor: PRIMARY,},
		'.block': {justifyContent: 'center',alignSelf: 'stretch',},
		'.full': {justifyContent: 'center',alignSelf: 'stretch',borderRadius: 0,},
		'.vertical': {flexDirection: 'column',height: null,},
		'.small': {height: 32,backgroundColor: variables.toolbarDefaultBg,
			'NativeBase.Text': {fontSize: 14,},
		},
		'.large': {height: 60,
			'NativeBase.Text': {fontSize: 22,lineHeight: 32,},
		},
		'.transparent': {
			backgroundColor: 'transparent',
			elevation: 0,
			shadowColor: null,
			shadowOffset: null,
			shadowRadius: null,
			shadowOpacity: null,
			'.theme': {
				'NativeBase.Text': {color: PRIMARY,},
				'NativeBase.Icon': {color: PRIMARY,},
				'NativeBase.IconNB': {color: PRIMARY,},
			},
			'.dark': {
				'NativeBase.Text': {color: '#000',},
				'NativeBase.IconNB': {color: '#000',},
				'NativeBase.Icon': {color: '#000',},
			},
		},
	}
	return buttonTheme
}
