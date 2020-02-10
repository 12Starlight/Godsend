// Import React Redux
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import Local Directory Files
import { signIn } from '../../actions/session_actions';
import SignIn from './session_form'; 


// mapStateToProps
const mapStateToProps = ({ signInErrors }) => ({
  errors: signInErrors.session,
  formType: 'signIn',
  navLink: <Link to="/signUp">{'Sign Up'}</Link>
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  demoAction: (demo) => dispatch(signIn(demo)),
  userAction: (user) => dispatch(signIn(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)