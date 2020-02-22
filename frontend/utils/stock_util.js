export const giveMeMyStock = (stockSearch) => (
  $.ajax({
    type: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${stockSearch}/company?token=Tsk_a67dbc04df1e4d4291c42cc6c261a96c`
  })
);



