import React from 'react';

import Sidebar from '~/components/Sidebar';

import './styles.css';

function Home() {
  return (
    <>
      <Sidebar home />
      <div className="main-container">
        <h4>Hello World</h4>
      </div>
    </>
  );
}

export default Home;
