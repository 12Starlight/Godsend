// Import Local Directory Files
import * as WatchlistApiUtil from '../utils/watchlists_api_util';

// Constants
export const GET_WATCHLISTS = 'GET_WATCHLISTS';
export const GET_WATCHLIST = 'GET_WATCHLIST';
export const TRASH_WATCHLIST = 'TRASH_WATCHLIST';
export const GET_WATCHLIST_ERRORS = 'GET_WATCHLIST_ERRORS'


// Regular Action Creators // Return POJO
const getWatchlistSecurities = (watchlists) => ({
  type: GET_WATCHLISTS,
  watchlists
});

const getWatchlistSecurity = (watchlist) => ({
  type: GET_WATCHLIST,
  watchlist 
});

const trashWatchlistSecurity = (watchlist) => ({
  type: TRASH_WATCHLIST,
  watchlistId: watchlist.id 
});

const getWatchlistErrors = (errors) => ({
  type: GET_WATCHLIST_ERRORS,
  errors 
})


// Thunk Action Creators
export const getWatchListSecurities = () => dispatch => (
  WatchlistApiUtil.receiveWatchlistSecurities().then(
    watchlistSecurityResponse => dispatch(getWatchlistSecurities(watchlistSecurityResponse)),
    errors => dispatch(getWatchlistErrors(errors.responseJSON)) 
  )
);

export const getWatchListSecurity = (id) => dispatch => (
  WatchlistApiUtil.receiveWatchlistSecurity(id).then(
    watchlistSecurityResponse => dispatch(getWatchlistSecurity(watchlistSecurityResponse)),
    errors => dispatch(getWatchlistErrors(errors))
  )
);

export const createWatchListSecurity = (watchlist) => dispatch => (
  WatchlistApiUtil.createWatchlistSecurity(watchlist).then(
    watchlistSecurityResponse => dispatch(getWatchlistSecurity(watchlistSecurityResponse)),
    errors => dispatch(getWatchlistErrors(errors))
  )
);

export const trashWatchListSecurity = (id) => dispatch => (
  WatchlistApiUtil.deleteWatchlistSecurity(id).then(
    watchlistSecurityResponse => dispatch(trashWatchlistSecurity(watchlistSecurityResponse)),
    errors => dispatch(getWatchlistErrors(errors))
  )
);