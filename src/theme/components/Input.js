export default (variables) => {
	const inputTheme = {
		height: 32,
		color: variables.inputColor,
		paddingLeft: 4,
		paddingRight: 3,
		flex: 1,
		fontSize: variables.inputFontSize,
		lineHeight: variables.inputLineHeight,
    //placeholderTextColor: '#7e7e7e',
		'.transparent': {},
		'.multiline': {height: null,},
		'.search': {height: 20, borderRadius: 10, flex: 1}
	}
	return inputTheme
}
