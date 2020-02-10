// Import React Redux
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

// Import Local Directory Files
import Home from '../home/home';
import { AuthRoute } from '../utils/route_util';
import SignInFormContainer from '../components/session_form/signin_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';


const App = () => (
  <div>
    <Route exact path='/' render={() => <div>This is where the Navbar goes</div>} />
    <Switch>
      <AuthRoute exact path='/signin' component={ SignInFormContainer } />
      <AuthRoute exact path='/signup' component= { SignUpFormContainer } />
    </Switch>
  </div>
);


export default App; 