import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Signin from '../pages/SignIn';
import Signup from '../pages/SignUp';

import Home from '../pages/Home';
import ProductShow from '../pages/Product';
import Profile from '../pages/Profile';
import Checkout from '../pages/Checkout';
import Recovery from '../pages/Recovery';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} isRegister />
      <Route path="/register" component={Signup} isRegister />
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" component={ProductShow} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/recovery" component={Recovery} />

      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
