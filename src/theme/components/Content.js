export default (variables) => {
  const {PRIMARY, GREY, platformStyle, platform} = variables
  return {
    width: '100%', backgroundColor: 'white',
    '.grey': {backgroundColor: GREY},
    '.theme': {backgroundColor: PRIMARY},
    '.white': {backgroundColor: 'white'},
    '.opacity': {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
    '.transparent': {backgroundColor: 'transparent'},
  }
}
