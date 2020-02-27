// Import React Redux
import { merge } from 'lodash';

// Import Local Directory Files
import { GET_ALSO_STOCK_STATS } from '../actions/stock_actions';


const alsoReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case GET_ALSO_STOCK_STATS:
      return [...]
    default:
      return oldState; 
  }
}


export default alsoReducer; 