import React from 'react';

import Sidebar from '~/components/Sidebar';

import './styles.css';

function Products() {
  return (
    <>
      <Sidebar products home={false} />
      <div className="main-container">
        <h4>Produtos</h4>
      </div>
    </>
  );
}

export default Products;
