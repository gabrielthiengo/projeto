import React from 'react';

import notFound from '~/assets/images/svg/not_found.svg';

import './styles.css';

function NotFound() {
  return (
    <div className="notfound-content">
      <img src={notFound} alt="not found" />

      <strong>OPSS!!!</strong>
      <p>A menos que você tenha vindo do futuro, mas essa tela não existe.</p>
    </div>
  );
}

export default NotFound;
