// Import React Redux
import { merge } from 'lodash'

// Import Local Directory Files
import { GET_WATCHLISTS, GET_WATCHLIST, TRASH_WATCHLIST } from '../actions/watchlist_actions';

// Build Variables Needed
const _nulWatchlist = Object.freeze({
  id: null 
});


const watchlistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState; 

  switch(action.type) {
    case GET_WATCHLISTS: 
      return Object.assign({}, oldState, action.watchlists);
    case GET_WATCHLIST:
      return Object.assign({}, oldState, { [action.watchlist.id]: action.watchlist });
    case TRASH_WATCHLIST:
      // debugger 
      newState = Object.assign({}, oldState) 
      delete newState[action.watchlist.id]
      return newState;  
    default:
      return oldState;  
  }
}


export default watchlistReducer; 








