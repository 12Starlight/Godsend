// Import React Redux
import { merge } from 'lodash';

// Import Local Directory Files
import { GET_ALL_SECTORS } from '../actions/session_actions';


const sectorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.types) {
    case GET_ALL_SECTORS:
      return [...action.sectors]
    default:
      return oldState;
  }
}


export default sectorsReducer; 