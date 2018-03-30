export default (variables) => {
  return {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: '#000',
    '.white':{color: 'white'},
    '.big':{fontSize: 30},
    '.small':{fontSize: 14},
    '.theme': {color: variables.toolbarDefaultBg,},
  }
}
