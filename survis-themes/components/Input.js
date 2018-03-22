import variable from './../variables/platform'

export default (variables = variable) => {
	const inputTheme = {
		'.multiline': {
			height: null,
		},
		height: variables.inputHeightBase,
		color: variables.inputColor,
		paddingLeft: 4,
		paddingRight: 3,
		flex: 1,
		fontSize: variables.inputFontSize,
		lineHeight: variables.inputLineHeight,
    //placeholderTextColor: '#7e7e7e'
	}
	return inputTheme
}
