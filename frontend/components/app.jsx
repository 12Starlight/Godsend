// Import React Redux
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

// Import Local Directory Files
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SignInFormContainer from '../components/session_form/signin_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import UserProfileContainer from '../components/user_profile/user_profile_container';


const App = () => (
  <div>
      <Route exact path='/' component={SignInFormContainer} />
    <Switch>
      <AuthRoute exact path='/signin' component={ SignInFormContainer } />
      <AuthRoute exact path='/signup' component={ SignUpFormContainer } />
      <ProtectedRoute path='/users/:awesome' component={ UserProfileContainer } />
    </Switch>
  </div>
);


export default App; 