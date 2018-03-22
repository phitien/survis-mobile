// import {Alert, AsyncStorage} from 'react-native'
// import {Actions} from 'react-native-router-flux'
//
// import {CONFIG} from '../constants'
// import {apis} from '../apis'
// import {requestHeader} from '../utils'
// import {UserGet} from './UserGet'
//
// import {setUser} from '../utils'
//
// export function UserLogin(Username : string, password : string) {
//   return dispatch => {
//     dispatch({type: constants.STATE_LOGIN_PENDING})
//     api
//       .login(Username, password)
//       .then((response) => {
//         const token = (response.data.results.token);
//         requestHeader('token', token)
//         dispatch({type: constants.STATE_LOGIN_SUCCESS, payload: {token}});
//         dispatch(UserGet());
//         Actions.pop();
//       })
//       .catch((error) => {
//         dispatch({
//           type: constants.STATE_LOGIN_FAILED,
//           error: {
//             message: `Invalid Username or Password`
//           }
//         })
//       });
//   }
// }
