import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function AuthLayout({ children }) {
  return <div className="wrapper">{children}</div>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
