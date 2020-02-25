export const getSectorsFeed = () => (
  $.ajax({
    method: 'GET',
    url: 'https://cloud.iexapis.com/stable/stock/market/sector-performance?token=sk_a88370cdf5ed4d0182b3af410705cd94'
  })
);