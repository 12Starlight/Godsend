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


const stockReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case GET_MY_STOCK:
      return
    default:
      return oldState; 
  }
}


export default stockReducer; 