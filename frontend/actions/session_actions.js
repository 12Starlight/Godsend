// Import Local Directory Files
import * as ApiUtilSession from '../utils/session_api_util'; 

// Constants
export const ACCEPT_CURRENT_USER = 'ACCEPT_CURRENT_USER';
export const END_SESSION_CURRENT_USER = 'END_SESSION_CURRENT_USER';
export const ACCEPT_SESSION_ERRORS = 'ACCEPT_SESSION_ERRORS';


// Regular Action Creators
const acceptCurrentUser = (currentUser) => ({
  type: ACCEPT_CURRENT_USER,
  currentUser
});

const endSession = () => ({
  type: END_SESSION_CURRENT_USER,
});

const acceptErrors = (errors) => ({
  type: ACCEPT_SESSION_ERRORS,
  errors
})



// Thunk Action Creators
export const signIn = (user) => (dispatch) => (
  ApiUtilSession.signIn(user).then(
    userPromise => dispatch(acceptCurrentUser(userPromise)),
    error => dispatch(acceptErrors(error.responseJSON))
  )
); 

export const signOut = () => (dispatch) => (
  ApiUtilSession.signOut().then(
    () => dispatch(endSession())
  )
); 

export const signUp = (user) => (dispatch) => (
  ApiUtilSession.signUp(user).then(
    userPromise => dispatch(acceptCurrentUser(userPromise)),
    errors => dispatch(acceptErrors(errors.responseJSON))
  )
); 