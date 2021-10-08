/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles.css';

import Navbar from '~/components/Navbar';

export default function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      {children}
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
