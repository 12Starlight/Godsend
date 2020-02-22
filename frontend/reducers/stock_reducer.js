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

  switch(action.type) {
    case GET_MY_STOCK:
      // debugger; 
      return Object.assign({}, oldState, { [action.stock.symbol]: action.stock });
    case GET_MY_STOCK_NEWS:
      return Object.assign({}, oldState, { newsId: action.stockNews} )
    case GET_MY_STOCK_RATINGS:
      return Object.assign({}, oldState, { ratingId: action.stockRatings });
    case GET_MY_STOCK_EARNINGS:
      return Object.assign({}, oldState, { earningsSymbol: action.stockEarnings });
    case PEOPLE_ALSO_BOUGHT:
      return Object.assign({}, oldState, { recommendId: action.recommendations });
    default:
      return oldState; 
  }
}


export default stockReducer; 