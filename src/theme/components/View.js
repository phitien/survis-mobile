import {PRIMARY, GREY} from '../../constants'

export default (variables) => {
  return {
    '.grey': {backgroundColor: GREY},
    '.theme': {backgroundColor: PRIMARY},
    '.white': {backgroundColor: 'white'},
    '.opacity': {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
    '.transparent': {backgroundColor: 'transparent'},
    '.horizontal':{display: 'flex', flexDirection: 'row'},
    '.middle': {display: 'flex', alignItems: 'center'},
    '.center':{display: 'flex', justifyContent: 'center'},
    '.space-between':{display: 'flex', justifyContent: 'space-between'},
    '.space-around':{display: 'flex', justifyContent: 'space-around'},
    '.start':{display: 'flex', justifyContent: 'flex-start',alignItems: 'flex-start'},
    '.end':{display: 'flex', justifyContent: 'flex-end',alignItems: 'flex-end'},
    '.border':{borderWidth: 1, borderColor: GREY},
    '.trim': {overflow: 'hidden'},
    '.actions': {display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'},
    '.heading': {
      padding: 10,backgroundColor: GREY,
      'NativeBase.Text': {
        fontSize: 16, fontWeight: 'bold'
      }
    },
  }
}