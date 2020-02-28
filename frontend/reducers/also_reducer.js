// Import React Redux
import { merge } from 'lodash';

// Import Local Directory Files
import { GET_ALSO_STOCK_STATS } from '../actions/also_actions';


const alsoReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case GET_ALSO_STOCK_STATS:
      console.log('Now I am on fire');
      return; 
    default:
      return oldState; 
  }
}


export default alsoReducer; 




// [...oldState, {
//   company: action.alsoStats.company,
//   symbol: action.alsoStats.symbol,
//   latestPrice: action.alsoStats.latestPrice,
//   priceChange: action.alsoStats.changePercent
// }]; 