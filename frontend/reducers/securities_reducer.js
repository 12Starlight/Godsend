// Import React Redux
import { merge } from 'lodash';

// Import Local Directory Files
import { ADD_TO_SECURITIES } from '../actions/security_actions';


const securitiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case ADD_TO_SECURITIES:
      // debugger; 
      return Object.assign({}, oldState, { [action.security.id]: action.security })
    default:
      return oldState;
  }
}


export default securitiesReducer; 