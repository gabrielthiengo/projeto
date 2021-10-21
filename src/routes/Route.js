import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';
import AuthLayout from '~/pages/_layouts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isRegister,
  ...rest
}) {
  const { pathname } = window.location;
  const Layout = pathname !== '/' ? DefaultLayout : AuthLayout;

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
