/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '~/components/Navigation';
import Sidebar from '~/components/Sidebar';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import './styles.css';

export default function DefaultLayout({ children }) {
  return (
    <div className="wrapper-default">
      <Navigation />
      <div className="content">{children}</div>
      <Sidebar />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
