export default (variables) => {
	const {PRIMARY, GREY, platformStyle, platform} = variables
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
		'.search': {
			flex: 1, height: 28, borderRadius: 14,
			backgroundColor: 'white',
			borderColor: 'transparent',
			marginTop: 5, marginBottom: 5,
			'NativeBase.Icon': {
				color: PRIMARY,
				paddingRight: 4,
				paddingLeft: 8,
			},
			'NativeBase.Input': {
				height: 28, paddingTop: 0, paddingBottom: 0,
				borderRadius: 14, flex: 1,
				borderWidth: 0, borderColor: 'transparent',
				borderBottomWidth: 0, borderBottomColor: 'transparent'
			},
		}
	}
}
