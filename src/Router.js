import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Recipe from './components/Recipe';

const router = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </Router>
);

export default router;