import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ({ component: Component, path, loggedIn, exact, state }) => {
  // debugger 
  
  return <Route path={path} exact={exact} render={(props) => ( // render requires a callback function
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={`/users/${state.session.id}`} />
      // <Redirect to='/' />
    ) 
  )} />
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/signin' />
    )  
  )} />
);

const LoggedIn = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      null 
    )
  )} />
);

const mapStateToProps = (state) => (
  { loggedIn: Boolean(state.session.id), state: state }
);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const LoggedInRoute = withRouter(connect(mapStateToProps)(LoggedIn));





