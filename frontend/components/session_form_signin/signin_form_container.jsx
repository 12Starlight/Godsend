// Import React Redux
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import Local Directory Files
import { signIn } from '../../actions/session_actions';
import SignIn from './signin_form'; 


// mapStateToProps
const mapStateToProps = (state) => {
  // debugger; 
  return {
  errors: state.errors.session,
  formType: 'Sign In',
  navLink: <Link to="/signup">{'Sign Up'}</Link>,
  sessionId: state.session.id 
  }
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  demoAction: (demo) => dispatch(signIn(demo)),
  userAction: (user) => dispatch(signIn(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)





