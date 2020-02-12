// Import Local Directory Files
import { ACCEPT_CURRENT_USER, ACCEPT_SESSION_ERRORS } from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case ACCEPT_SESSION_ERRORS:
      debugger; 
      return action.errors; 
    case ACCEPT_CURRENT_USER:
      return []; 
    default:
      return state;
  }
}


export default sessionErrorsReducer; 





