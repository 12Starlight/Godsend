// About 
export const giveMeMyStock = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${stockSearch}/company?token=sk_a88370cdf5ed4d0182b3af410705cd94`
  })
);

// Stats
export const giveMeMyStockStats = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${stockSearch}/stats/stat?token=sk_a88370cdf5ed4d0182b3af410705cd94`
  })
)

// News
export const giveMeMyStockNews = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${stockSearch}/news?token=sk_a88370cdf5ed4d0182b3af410705cd94` // cloud
  })
); 

// Analyst Ratings
export const giveMeMYStockRatings = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${stockSearch}/recommendation-trends?token=sk_a88370cdf5ed4d0182b3af410705cd94`
  })
);

// Earngins
export const giveMeMyStockEarnings = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${stockSearch}/earnings/4/?token=sk_a88370cdf5ed4d0182b3af410705cd94` // cloud
  })
);

// Also Bought
export const givePeopleAlsoBought = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${stockSearch}/peers?token=sk_a88370cdf5ed4d0182b3af410705cd94`
  })
);
