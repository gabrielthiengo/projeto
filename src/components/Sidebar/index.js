import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  FaHome,
  FaSearch,
  FaChartPie,
  FaClipboardCheck,
  FaCogs,
  FaSignOutAlt,
} from 'react-icons/fa';
import logo from '~/assets/images/logos/text.png';

import './styles.css';

function Sidebar() {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="dflex column sidebar">
      <div className="sidebar-content">
        <header>
          <img src={logo} alt="logotipo" />
        </header>

        <div className="menu-content">
          <div className={`menu-item ${isActive === 0 ? 'active' : ''} `}>
            <Link to="/" onClick={() => setIsActive(0)}>
              <div>
                <FaHome size={18} />
              </div>
              <p>INÍCIO</p>
            </Link>
          </div>
          <div className={`menu-item ${isActive === 1 ? 'active' : ''} `}>
            <Link to="/" onClick={() => setIsActive(1)}>
              <div>
                <FaSearch size={18} />
              </div>
              <p>CONSULTAS</p>
            </Link>
          </div>
          <div className={`menu-item ${isActive === 3 ? 'active' : ''} `}>
            <Link to="/" onClick={() => setIsActive(3)}>
              <div>
                <FaClipboardCheck size={18} />
              </div>
              <p>CADASTROS</p>
            </Link>
          </div>
          <div className={`menu-item ${isActive === 4 ? 'active' : ''} `}>
            <Link to="/indicadores" onClick={() => setIsActive(4)}>
              <div>
                <FaChartPie size={18} />
              </div>
              <p>INDICADORES</p>
            </Link>
          </div>
          <div className={`menu-item ${isActive === 5 ? 'active' : ''} `}>
            <Link to="/" onClick={() => setIsActive(5)}>
              <div>
                <FaCogs size={18} />
              </div>
              <p>CONFIGURAÇÕES</p>
            </Link>
          </div>
          <div className={`menu-item ${isActive === 6 ? 'active' : ''} `}>
            <Link to="/" onClick={() => setIsActive(6)}>
              <div>
                <FaSignOutAlt size={18} />
              </div>
              <p>SAIR</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
