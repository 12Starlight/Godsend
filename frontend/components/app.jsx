// Import React Redux
import React from 'react';
import { Route } from 'react-router-dom';

// Import Local Directory Files
import Home from '../home/home';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignInFormContainer from '../components/session_form/signin_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';


const App = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Switch>
      <AuthRoute exact path='/signIn' component={ SignInFormContainer } />
      <AuthRoute exact path='/signUp' component= { SignUpFormContainer } />
    </Switch>
  </div>
);


export default App; 