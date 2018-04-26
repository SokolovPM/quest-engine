import React from 'react';
import { Router, Route } from 'react-router';
import MainPage from './components/form';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={MainPage} />
  </Router>
);

export default Routes;
