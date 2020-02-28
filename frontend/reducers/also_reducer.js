// Import React Redux
import { merge } from 'lodash';

// Import Local Directory Files
import { GET_ALSO_STOCK_STATS } from '../actions/also_actions';


const alsoReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case GET_ALSO_STOCK_STATS:
        // if (oldState.length === 0) {
        //   return [...oldState, { company: action.alsoStats.company} ]
        // }

        // let newState = []
        // oldState.forEach((stateObj) => {
        //   if (stateObj.company.includes(action.alsoStats.company)) {
        //     newState = [...oldState, { company: action.alsoStats.company }]
        //   }
        // })
        
        // return newState; 
      
      return [...oldState, {
        company: action.alsoStats.company,
        symbol: action.alsoStats.symbol,
        latestPrice: action.alsoStats.latestPrice,
        priceChange: action.alsoStats.changePercent
      } ]; 
    default:
      return oldState; 
  }
}


export default alsoReducer; 




