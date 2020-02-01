import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';
// import { AuthRoute, ProtectedRoute } from '../utils/route_utils';


const App = () => (
  <div>
    <Route exact path='/' component={Home} />
  </div>
);


export default App; 