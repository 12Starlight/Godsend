// Import Local Directory Files
import { ACCEPT_CURRENT_USER, ACCEPT_SESSION_ERRORS } from '../actions/session_actions';
import { GET_WATCHLIST_ERRORS } from '../actions/watchlist_actions';
import { GET_NEWS_ERRORS } from '../actions/feed_actions';


const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case ACCEPT_SESSION_ERRORS:
      // debugger; 
      return action.errors; 
    case ACCEPT_CURRENT_USER:
      return [];
    case GET_WATCHLIST_ERRORS:
      return action.errors;  
    case GET_NEWS_ERRORS:
      return action.errors;  
    default:
      return state;
  }
}


export default sessionErrorsReducer; 





