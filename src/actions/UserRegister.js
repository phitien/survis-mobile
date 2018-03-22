// import {Alert, AsyncStorage} from 'react-native'
// import {Actions} from 'react-native-router-flux'
//
// import {CONFIG} from '../constants'
// import {apis} from '../apis'
// import {requestHeader} from '../utils'
//
// import {setUser} from '../utils'
//
// export function UserRegister(Username : string, password : string, name : string) {
//   return dispatch => {
//     dispatch({type: constants.STATE_REGISTER_PENDING})
//     api
//       .register(Username, password, name)
//       .then((response) => {
//         dispatch({type: constants.STATE_REGISTER_SUCCESS});
//         Alert.alert('Account registered', 'Please check your email to activate your account', [
//           {
//             text: 'OK',
//             onPress: e => {
//               Actions.pop();
//             }
//           }
//         ], {cancelable: false});
//       })
//       .catch((error) => {
//         dispatch({
//           type: constants.STATE_REGISTER_FAILED,
//           error: {
//             message: `email exist`
//           }
//         });
//       });
//   }
// }
