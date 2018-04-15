export default (variables) => {
	return {
		height: 32,
		color: variables.inputColor,
		paddingLeft: 6,
		paddingRight: 6,
		flex: 1,
		fontSize: 13,
		lineHeight: 15,
    //placeholderTextColor: '#7e7e7e',
		'.transparent': {},
		'.multiline': {height: null,},
		'.white': {backgroundColor: 'white'},
	}
}
