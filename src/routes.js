import React from 'react';
import { Router, Route } from 'react-router';
import MainPage from './components/form';
import Dashboard from './components/form/dashboard';
import Layout from './components/form/layout';
import QuestPage from './components/form/quest-page';
import Chapter from './components/form/chapter';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route component={Layout}>
      <Route path="/" component={Dashboard} />
      <Route
          path='quest'
          component={QuestPage}
      />
      <Route
          path='chapter'
          component={Chapter}
      />
    </Route>
  </Router>
);

export default Routes;
