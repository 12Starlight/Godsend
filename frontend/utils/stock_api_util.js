// About 
export const giveMeMyStock = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${stockSearch}/company?token=pk_9dbe2686af9e4869b46f1ff7fb1b54dd`
  })
);

// News
export const giveMeMyStockNews = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${stockSearch}/news?token=pk_9dbe2686af9e4869b46f1ff7fb1b54dd`
  })
); 

// Analyst Ratings
export const giveMeMYStockRatings = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${stockSearch}/recommendation-trends?token=Tsk_a67dbc04df1e4d4291c42cc6c261a96c`
  })
);

// Earngins
export const giveMeMyStockEarnings = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${stockSearch}/earnings/1?period=annual&token=pk_9dbe2686af9e4869b46f1ff7fb1b54dd`
  })
);

// Also Bought
export const givePeopleAlsoBought = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${stockSearch}/peers?token=Tsk_a67dbc04df1e4d4291c42cc6c261a96c`
  })
);