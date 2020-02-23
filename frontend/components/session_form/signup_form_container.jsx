// Import React Redux
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import Local Directory Files
import { signUp, signIn } from '../../actions/session_actions'; 
import SignUp from './signup_form';


// mapStateToProps
const mapStateToProps = (state) => {
  return{errors: state.errors.session,
  formType: 'Sign Up',
  navLink: <Link to="/signin">{'Sign In :)'}</Link>,
  userId: state.session.id 
}};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  userAction: (user) => dispatch(signUp(user)),
  demoAction: (demo) => dispatch(signIn(demo))
}); 


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)





