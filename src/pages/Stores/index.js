import React from 'react';

import Background from '~/components/Background';
import Navbar from '~/components/Navbar';

import './styles.css';

function Stores() {
  return (
    <div className="wrapper-container">
      <Navbar />
      <Background />
    </div>
  );
}

export default Stores;
