export const addSecurity = (security) => (
  $.ajax({
    method: 'POST',
    url: '/api/securities',
    data: { security }
  })
)