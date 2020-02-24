// Import React Redux
import { merge } from 'lodash'

// Import Local Directory Files
import { 
  GET_MY_STOCK,
  GET_MY_STOCK_STATS,
  GET_MY_STOCK_NEWS,
  GET_MY_STOCK_RATINGS,
  GET_MY_STOCK_EARNINGS,
  PEOPLE_ALSO_BOUGHT
} from '../actions/stock_actions';


const stockReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {}; 

  switch(action.type) {
    case GET_MY_STOCK:
      // debugger; 
      newState = Object.assign({}, oldState);
      delete newState.stockSymbol; 
      // debugger; 
      return Object.assign({}, newState, { stockSymbol: action.stock } );
    case GET_MY_STOCK_STATS:
      newState = Object.assign({}, oldState);
      delete newState.stockStats;
      return Object.assign({}, newState, { stockStats: action.stats } );
    case GET_MY_STOCK_NEWS:
      newState = Object.assign({}, oldState);
      delete newState.newsId; 
      return Object.assign({}, newState, { newsId: action.stockNews} );
    case GET_MY_STOCK_RATINGS:
      newState = Object.assign({}, oldState);
      delete newState.ratingId; 
      return Object.assign({}, newState, { ratingId: action.stockRatings } );
    case GET_MY_STOCK_EARNINGS:
      newState = Object.assign({}, oldState);
      delete newState.earningsSymbol; 
      return Object.assign({}, newState, { earningsSymbol: action.stockEarnings } );
    case PEOPLE_ALSO_BOUGHT:
      newState = Object.assign({}, oldState);
      delete newState.recommendId; 
      return Object.assign({}, newState, { recommendId: action.recommendations } );
    default:
      return oldState; 
  }
}


export default stockReducer; 