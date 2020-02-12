// Import React Redux
import { merge } from 'lodash';

// Import Local Directoy Files
import { ACCEPT_CURRENT_USER, END_SESSION_CURRENT_USER } from '../actions/session_actions';


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case ACCEPT_CURRENT_USER:
      // debugger; 
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
    case END_SESSION_CURRENT_USER:
      return oldState; 
    default:
      return oldState; 
  }
}


export default usersReducer; 