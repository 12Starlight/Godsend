// Import Local Directory Files
import * as ApiUtilUser from '../utils/users_api_util';

// Constants
export const ACCEPT_USER = 'ACCEPT_USER';


// Regular Action Creator
const acceptUser = (user) => ({
  type: ACCEPT_USER,
  user 
})

// Thunk Action Creator
export const getUser = (id) => (dispatch) => (
  ApiUtilUser.getUser(id).then(userPromise => dispatch(acceptUser(userPromise)))
); 