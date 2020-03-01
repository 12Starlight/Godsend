export const addSecurity = (security) => (
  $.ajax({
    method: 'POST',
    url: '/api/securities',
    data: { security }
  })
);

export const removeSecurity = (securityId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/securities/${securityId}`
  })
);
