// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import session from './session_errors_reducer';
import watchlist from './session_errors_reducer';
import news from './session_errors_reducer';


const errorsReducer = combineReducers({
  session: session,
  watchlist: watchlist, 
  news: news
});


export default errorsReducer; 