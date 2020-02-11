// Import React Redux
import { merge } from 'lodash';

// Import Local Directoy Files
import { ACCEPT_USER } from '../actions/user_actions'; 


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case ACCEPT_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user });
    default:
      return oldState; 
  }
}


export default usersReducer; 