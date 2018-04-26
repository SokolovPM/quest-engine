import React from 'react';
import { Router, Route } from 'react-router';
import MainPage from './components/form';
import Dashboard from './components/form/dashboard';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={Dashboard} />
  </Router>
);

export default Routes;
