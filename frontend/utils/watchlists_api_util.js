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

export const createWatchlistSecurity = (watchlistSecurity) => (
  $.ajax({
    method: `POST`,
    url: `/api/watchlists`,
    data: { watchlistSecurity }
  })
);

export const deleteWatchlistSecurity = (id) => (
  $.ajax({
    method: `DELETE`,
    url: `/api/watchlists/${id}`
  })
);






