import React from 'react';

import Sidebar from '~/components/Sidebar';

import './styles.css';

function Shop() {
  return (
    <>
      <Sidebar store home={false} />
      <div className="main-container">
        <h4>Loja</h4>
      </div>
    </>
  );
}

export default Shop;
