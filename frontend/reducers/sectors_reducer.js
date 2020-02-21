// Import React Redux
import { merge } from 'lodash';

// Import Local Directory Files
import { GET_ALL_SECTORS } from '../actions/sectors_actions';


const sectorsReducer = (oldState = [], action) => {
  // debugger; 
  Object.freeze(oldState);

  switch(action.type) {
    case GET_ALL_SECTORS:
      return [ ...action.sectors ]
    default:
      return oldState;
  }
}


export default sectorsReducer; 