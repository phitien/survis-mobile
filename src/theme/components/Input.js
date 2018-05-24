export default (variables) => {
	return {
		height: 32,
		color: variables.inputColor,
		paddingLeft: 6,
		paddingRight: 6,
		flex: 1,
		fontSize: 13,
		'.multiline': {height: null,},
		'.white': {backgroundColor: 'white'},
	}
}
