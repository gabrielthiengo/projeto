import React from 'react';

import Sidebar from '~/components/Sidebar';

import './styles.css';

function Collection() {
  return (
    <>
      <Sidebar collection home={false} />
      <div className="main-container">
        <h4>Coleção</h4>
      </div>
    </>
  );
}

export default Collection;
