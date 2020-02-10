// Import React Redux
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import Local Directory Files
import { signUp } from '../../actions/session_actions'; 
import SignUp from './session_form';


// mapStateToProps
const mapStateToProps = ({ signUpErrors }) => ({
  errors: signUpErrors.session,
  formType: 'signUp',
  navLink: <Link to="/signIn">{'Sign In :)'}</Link>
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  demoAction: (demo) => dispatch(signUp(demo)),
  userAction: (user) => dispatch(signUp(user))
}); 


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)