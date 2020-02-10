// Existing User // Session
export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: `/api/session`,
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: `/api/session`
  })
);

// New User 
export const signUp = (user) => (
  $.ajax({
    method: 'POST',
    url: `/api/users`,
    data: { user }
  })
);
