// Import Local Directory Files
import * as WatchlistApiUtil from '../utils/watchlists_api_util';

// Constants
export const GET_WATCHLISTS = 'GET_WATCHLISTS';
export const GET_WATHLIST = 'GET_WATCHLIST';
export const TRASH_WATCHLIST = 'TRASH_WATCHLIST';
export const GET_WATCHLIST_ERRORS = 'GET_WATCHLIST_ERRORS'


// Regular Action Creators // Return POJO
const getWatchlists = (watchlists) => ({
  type: GET_WATCHLISTS,
  watchlists
});

const getWatchlist = (watchlist) => ({
  type: GET_WATCHLIST,
  watchlist 
});

const trashWatchlist = (watchlistId) => ({
  type: TRASH_WATCHLIST,
  watchlistId
});

const getWatchlistErrors = (errors) => ({
  type: GET_WATCHLIST_ERRORS,
  errors 
})


// Thunk Action Creators
export const getWatchlists = () => dispatch => (
  WatchlistApiUtil.receiveWatchlists().then(
    watchlistsResponse => dispatch(getWatchlists(watchlistsResponse)),
    errors => dispatch(getWatchlistErrors(errors.responseJSON)) 
  )
);

export const getWatchlist = (id) => dispatch => (
  WatchlistApiUtil.receiveWatchlist(id).then(
    watchlistResponse => dispatch(getWatchlist(watchlistResponse)),
    errors => dispatch(getWatchlistErrors(errors))
  )
);

export const createWatchlist = (watchlist) => dispatch => (
  WatchlistApiUtil.createWatchlist(watchlist).then(
    watchlistResponse => dispatch(getWatchlist(watchlistResponse)),
    errors => dispatch(getWatchlistErrors(errors))
  )
);

export const trashWatchlist = (id) => dispatch => (
  WatchlistApiUtil.deleteWatchlist(id).then(
    watchlistResponse => dispatch(trashWatchlist(watchlistResponse)),
    errors => dispatch(getWatchlistErrors(errors))
  )
);