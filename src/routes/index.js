import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Signin from '../pages/SignIn';
import Signup from '../pages/SignUp';

import Home from '../pages/Home';
import Calls from '../pages/Calls';
import Order from '../pages/Order';
import Products from '../pages/Products';
import Shop from '../pages/Shop';
import Collection from '../pages/Collection';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} isRegister />
      <Route path="/register" component={Signup} isRegister />

      <Route path="/" exact component={Home} />
      <Route path="/chamados" component={Calls} />
      <Route path="/pedidos" component={Order} />
      <Route path="/produtos" component={Products} />
      <Route path="/loja" component={Shop} />
      <Route path="/colecao" component={Collection} />
    </Switch>
  );
}
