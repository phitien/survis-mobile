
export default (variables) => {
	const {PRIMARY, GREY, platformStyle, platform} = variables
	return {
		height: 20, width: 20, paddingLeft: 4, overflow: 'hidden',
		borderWidth: 1, borderColor: GREY,
		backgroundColor: 'white',
		borderRadius: 10,
		'.radio': {borderRadius: 10},
		'.checkbox': {borderRadius: 0},
		'.checked': {backgroundColor: PRIMARY},
  }
}
