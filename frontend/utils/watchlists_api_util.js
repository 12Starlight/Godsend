export const receiveWatchlistSecurities = () => (
  $.ajax({
    method: 'GET',
    url: `/api/watchlist_securities`
  })
);

export const receiveWatchlistSecurity = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/watchlist_securities/${id}`
  })
);

export const createWatchlistSecurity = (watchlistsss) => (
  $.ajax({
    method: `POST`,
    url: `/api/watchlist_securities`,
    data: { watchlist_security: watchlistsss } // the key must match the strong parameters
  })
);

export const deleteWatchlistSecurity = (id) => (
  $.ajax({
    method: `DELETE`,
    url: `/api/watchlist_securities/${id}`
  })
);






