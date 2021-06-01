import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Signin from '../pages/SignIn';
import Signup from '../pages/SignUp';

import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} isRegister />
      <Route path="/register" component={Signup} isRegister />

      <Route path="/" exact component={Home} />
    </Switch>
  );
}
