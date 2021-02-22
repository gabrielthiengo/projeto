import React from 'react';

import Sidebar from '~/components/Sidebar';

import './styles.css';

function Order() {
  return (
    <>
      <Sidebar orders home={false} />
      <div className="main-container">
        <h4>Pedidos</h4>
      </div>
    </>
  );
}

export default Order;
