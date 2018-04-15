export default (variables) => {
  const {PRIMARY, GREY, LIGHTGREY, platformStyle, platform} = variables
  return {
    width: '100%', backgroundColor: 'white',
    '.grey': {backgroundColor: LIGHTGREY},
    '.theme': {backgroundColor: PRIMARY},
    '.white': {backgroundColor: 'white'},
    '.opacity': {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
    '.transparent': {backgroundColor: 'transparent'},
  }
}
