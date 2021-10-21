import React from 'react';

import './styles.css';

function Navbar() {
  return (
    <div className="l-navbar">
      <h3>Casamentos.com</h3>

      <div className="l-account">
        <button className="l-login" type="button">
          Acessar
        </button>
        <button className="l-create" type="button">
          Cadastre-se
        </button>
      </div>
    </div>
  );
}

export default Navbar;
