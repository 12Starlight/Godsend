export const getNewsFeed = () => (
  $.ajax({
    method: 'GET',
    url: 'https://cloud.iexapis.com/stable/stock/market/news?token=sk_a88370cdf5ed4d0182b3af410705cd94'
  })
);

