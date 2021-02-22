import React from 'react';

import Sidebar from '~/components/Sidebar';

import './styles.css';

function Calls() {
  return (
    <>
      <Sidebar calls home={false} />
      <div className="main-container">
        <h4>Chamados</h4>
      </div>
    </>
  );
}

export default Calls;
