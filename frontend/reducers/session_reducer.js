// Import React Redux
// Import Local Directory Files
import { ACCEPT_CURRENT_USER, END_SESSION_CURRENT_USER } from '../actions/session_actions';


const _nulUser = Object.freeze({
  id: null
});

const sessionReducer = (oldState = _nulUser, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case ACCEPT_CURRENT_USER:
      return { id: action.currentUser.id }
    case END_SESSION_CURRENT_USER:
      return _nulUser; 
    default:
      return oldState; 
  }
};


export default sessionReducer; 