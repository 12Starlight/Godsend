// Import Local Directory Files
import * as SecurityApiUtil from '../utils/security_api_util';

// Constraints
export const ADD_TO_SECURITIES = 'ADD_TO_SECURITIES';
export const TRASH_SECURITY = 'TRASH_SECURITY';
export const SECURITY_ERRORS = 'SECURITY_ERRORS';


// Regular Action Creators
const gotSecurity = (security) => {
  // debugger; 
  return {
  type: ADD_TO_SECURITIES,
  security
  }
};

const trashSecurity = (security) => {
  // debugger;
  return{
  type: TRASH_SECURITY,
  securityId: security.id
  }
}

const securityErrors = (errors) => ({
  type: SECURITY_ERRORS,
  errors
});


// Thunk Action Creator
export const addedSecurity = (security) => (dispatch) => (
  SecurityApiUtil.addSecurity(security).then(
    securityResponse => dispatch(gotSecurity(securityResponse)),
    securitiesErrors => dispatch(securityErrors(securitiesErrors))
  )
);

export const removedSecurity = (securityId) => (dispatch) => (
  SecurityApiUtil.removeSecurity(securityId).then(
    removedSecurity => dispatch(trashSecurity(removedSecurity)),
    securitiesErrors => dispatch(securityErrors(securitiesErrors))
  )
);