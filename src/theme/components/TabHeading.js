export default (variables) => {
  const {PRIMARY, GREY, platform} = variables

  return {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1, padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    'NativeBase.Text': {
      color: 'black',
      fontSize: 16,
    },
    'NativeBase.Icon': {
      color: 'black',
    },
    '.active': {
      'NativeBase.Text': {
        color: PRIMARY,
        fontWeight: 'bold'
      },
      'NativeBase.Icon': {
        color: PRIMARY,
      }
    }
  }
}
