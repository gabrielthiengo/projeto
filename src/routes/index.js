import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '../pages/SignIn';

import Home from '../pages/Home';
import Indicators from '../pages/Indicators';
import CustomerList from '../pages/Customer/CustomerList';
import CustomerView from '../pages/Customer/CustomerView';
import ProductList from '../pages/Products/ProductList';
import ProductView from '../pages/Products/ProductView';
import Target from '../pages/Target';
import Sheet from '../pages/Sheet';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} isRegister />

      <Route path="/" exact component={Home} isPrivate />

      <Route path="/indicadores" component={Indicators} isPrivate />
      <Route path="/metas" component={Target} isPrivate />
      <Route path="/planilhas" component={Sheet} isPrivate />
      <Route path="/clientes" exact component={CustomerList} isPrivate />
      <Route
        path="/cliente/info/:customerId/:route"
        component={CustomerView}
        isPrivate
      />

      <Route path="/produtos" exact component={ProductList} isPrivate />
      <Route
        path="/produto/info/:productId"
        exact
        component={ProductView}
        isPrivate
      />
    </Switch>
  );
}
