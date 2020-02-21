export const getSectorsFeed = () => (
  $.ajax({
    method: 'GET',
    url: 'https://sandbox.iexapis.com/stable/stock/market/sector-performance?token=Tpk_c61a1c45d7e04f02bf2f23d427b5f6af'
  })
);