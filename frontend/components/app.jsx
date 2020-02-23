// Import React Redux
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

// Import Local Directory Files
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SignInFormContainer from '../components/session_form/signin_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import UserProfileContainer from '../components/user_profile/user_profile_container';
import StockProfileContainer from '../components/stock/stock_container';


const App = () => (
  <div>
      <Route exact path='/' component={SignInFormContainer} />
    <Switch>
      <AuthRoute exact path='/signin' component={ SignInFormContainer } />
      <AuthRoute exact path='/signup' component={ SignUpFormContainer } />
      <ProtectedRoute exact path='/users/:awesome' component={ UserProfileContainer } />
      <ProtectedRoute exact path='/stock/:ticker' component={ StockProfileContainer } />
    </Switch>
  </div>
);


export default App; 