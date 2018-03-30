export default (variables) => {
	const {GREY, platformStyle, platform} = variables
	return {
		borderWidth: 1,
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
		borderColor: GREY,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: 'rgb(206,206,206)',
		marginBottom: 10,
		marginTop: 5,
		// marginLeft: 2
		'NativeBase.Label': {
			fontSize: variables.inputFontSize,
			color: variables.inputColorPlaceholder,
			paddingRight: 5,
		},
		'NativeBase.Icon': {
			fontSize: 24,
			paddingRight: 8,
		},
		'NativeBase.IconNB': {
			fontSize: 24,
			paddingRight: 8,
		},
		'NativeBase.Input': {
			height: 32,
			color: variables.inputColor,
			flex: 1,
			fontSize: 13,
		},
	}
}
