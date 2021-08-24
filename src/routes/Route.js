import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';
import AuthLayout from '~/pages/_layouts/auth';
import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isRegister,
  ...rest
}) {
  const { signed, signedDate } = store.getState().auth;

  const currDate = moment(new Date());
  const siginDate = moment(signedDate);

  if ((!signed && isPrivate) || siginDate.diff(currDate, 'days') > 6) {
    return <Redirect to="/signin" />;
  }

  if (signed && isRegister) {
    return <Redirect to="/" />;
  }

  const Layout = isRegister ? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isRegister: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isRegister: false,
};
