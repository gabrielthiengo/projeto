import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css';
import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaBars } from 'react-icons/fa';

function handleMenu() {
  const menu = document.getElementById('header').className;

  if (menu.indexOf('header-mobile') === -1) {
    document.getElementById('header').classList.add('header-mobile');
  } else {
    document.getElementById('header').classList.remove('header-mobile');
  }
}

function closeMenu() {
  document.getElementById('header').classList.remove('header-mobile');
}

function PageHeader() {
  const name = useSelector(state => state.user.profile.name);

  return (
    <div id="header" className="header">
      <div className="header-content">
        <div className="menu-logo">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaBars
              onClick={handleMenu}
              size={23}
              color="white"
              style={{ marginRight: '10px', cursor: 'pointer' }}
            />
            <Link to="/dashboard">HELP-ME</Link>
          </div>
        </div>
        <div className="menu-item">
          <Link onClick={closeMenu} to="/dashboard">
            Pedidos
          </Link>
        </div>
        <div className="menu-item">
          <Link onClick={closeMenu} to="/works">
            Trabalhos
          </Link>
        </div>
        <div className="menu-item">
          <Link onClick={closeMenu} to="/dashboard">
            Retiradas
          </Link>
        </div>
        <div className="menu-item">
          <Link onClick={closeMenu} to="/profile">
            Perfil
          </Link>
        </div>
      </div>
      <div className="profile">
        {name}
        <FaSignOutAlt />
      </div>
    </div>
  );
}

export default PageHeader;
