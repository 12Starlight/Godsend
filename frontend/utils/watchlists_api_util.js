export const receiveWatchlists = () => (
  $.ajax({
    method: 'GET',
    url: `/api/watchlists`
  })
);

export const receiveWatchlist = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/watchlists/${id}`
  })
);

export const createWatchlist = (watchlist) => (
  $.ajax({
    method: `POST`,
    url: `/api/watchlists`,
    data: { watchlist }
  })
);

export const deleteWatchlist = (id) => (
  $.ajax({
    method: `DELETE`,
    url: `/api/watchlists/${id}`
  })
);






