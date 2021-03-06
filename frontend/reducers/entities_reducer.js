// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import usersReducer from './users_reducer';
import watchlistSecuritiesReducer from './watchlist_securities_reducer';
import newsReducer from './news_reducer';
import sectorsReducer from './sectors_reducer';
import stockReducer from './stock_reducer';
import alsoReducer from './also_reducer';
import securitiesReducer from './securities_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  watchlists: watchlistSecuritiesReducer,
  news: newsReducer,
  sectors: sectorsReducer, 
  stock: stockReducer,
  also: alsoReducer,
  securities: securitiesReducer
});


export default entitiesReducer; 