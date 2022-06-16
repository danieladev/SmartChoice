import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Admin from '../pages/Admin';
import Client from '../pages/Client';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Client} />
    <Route path="/admin" exact component={Admin} />
  </Switch>
);

export default Routes;
