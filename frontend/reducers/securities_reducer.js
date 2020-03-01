// Import React Redux
import { merge } from 'lodash';

// Import Local Directory Files
import { ADD_TO_SECURITIES, TRASH_SECURITY } from '../actions/security_actions';


const securitiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState; 

  switch(action.type) {
    case ADD_TO_SECURITIES:
      // debugger; 
      return Object.assign({}, oldState, { [action.security.id]: action.security } )
    case TRASH_SECURITY:
      newState = Object.assign({}, oldState);
      // debugger; 
      delete newState[action.securityId];
      return newState; 
    default:
      return oldState;
  }
}


export default securitiesReducer; 