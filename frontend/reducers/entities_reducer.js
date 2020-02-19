// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import usersReducer from './users_reducer';
import watchlistReducer from './watchlist_reducer';
import newsReducer from './news_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  watchlists: watchlistReducer,
  news: newsReducer
});


export default entitiesReducer; 