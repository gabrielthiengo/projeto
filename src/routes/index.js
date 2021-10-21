import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Wedding from '../pages/Wedding';
import Landing from '../pages/Landing';

export default function Routes() {
  const { pathname } = window.location;

  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path={`${pathname}`} component={Wedding} />
    </Switch>
  );
}
