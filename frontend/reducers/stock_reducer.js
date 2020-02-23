// Import React Redux
import { merge } from 'lodash'

// Import Local Directory Files
import { 
  GET_MY_STOCK,
  GET_MY_STOCK_NEWS,
  GET_MY_STOCK_RATINGS,
  GET_MY_STOCK_EARNINGS,
  PEOPLE_ALSO_BOUGHT
} from '../actions/stock_actions';


const stockReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case GET_MY_STOCK:
      // debugger; 
      newState = Object.assign({}, oldState);
      newState = {};
      // debugger; 
      return Object.assign({}, newState, { [action.stock.symbol]: action.stock });
    case GET_MY_STOCK_NEWS:
      newState = Object.assign({}, oldState);
      newState = {}; 
      return Object.assign({}, newState, { newsId: action.stockNews} )
    case GET_MY_STOCK_RATINGS:
      newState = Object.assign({}, oldState);
      newState = {}; 
      return Object.assign({}, newState, { ratingId: action.stockRatings });
    case GET_MY_STOCK_EARNINGS:
      newState = Object.assign({}, oldState);
      newState = {}; 
      return Object.assign({}, newState, { earningsSymbol: action.stockEarnings });
    case PEOPLE_ALSO_BOUGHT:
      newState = Object.assign({}, oldState);
      newState = {}; 
      return Object.assign({}, newState, { recommendId: action.recommendations });
    default:
      return oldState; 
  }
}


export default stockReducer; 