export const receiveWatchlistSecurities = () => (
  $.ajax({
    method: 'GET',
    url: `/api/watchlists`
  })
);

export const receiveWatchlistSecurity = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/watchlists/${id}`
  })
);

export const createWatchlistSecurity = (watchlistsss) => (
  $.ajax({
    method: `POST`,
    url: `/api/watchlists`,
    data: { watchlist: watchlistsss } // the key must match the strong parameters
  })
);

export const deleteWatchlistSecurity = (id) => (
  $.ajax({
    method: `DELETE`,
    url: `/api/watchlists/${id}`
  })
);






