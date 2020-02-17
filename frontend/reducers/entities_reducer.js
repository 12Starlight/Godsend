// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import usersReducer from './users_reducer';
import watchlistReducer from './watchlist_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  watchlists: watchlistReducer
});


export default entitiesReducer; 