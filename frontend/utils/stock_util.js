// About 
export const giveMeMyStock = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${stockSearch}/company?token=Tsk_a67dbc04df1e4d4291c42cc6c261a96c`
  })
);

// News
export const giveMeMyStockNews = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${stockSearch}/news?token=Tsk_a67dbc04df1e4d4291c42cc6c261a96c`
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
    url: `https://sandbox.iexapis.com/stable/stock/${stockSearch}/earnings/1?period=annual&token=Tsk_a67dbc04df1e4d4291c42cc6c261a96c`
  })
)