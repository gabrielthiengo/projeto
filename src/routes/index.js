import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Signin from '../pages/SignIn';
import Signup from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Works from '../pages/Works';
import WorkDetail from '../pages/WorkDetail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/works" component={Works} isPrivate />
      <Route path="/work-detail/:id" component={WorkDetail} isPrivate />
    </Switch>
  );
}
