import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  FaHome,
  FaSearch,
  FaChartPie,
  FaClipboardCheck,
  FaCogs,
  FaSignOutAlt,
  FaSitemap,
} from 'react-icons/fa';

import './styles.css';

function Sidebar() {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="dflex column sidebar">
      <header>
        <FaSitemap size={40} color="#f37920" />
        <h4>GESTÃO À VISTA</h4>
      </header>

      <div className="menu-content">
        <div className={`menu-item ${isActive === 0 && 'active'} `}>
          <Link to="/" onClick={() => setIsActive(0)}>
            <FaHome size={18} />
            INÍCIO
          </Link>
        </div>
        <div className={`menu-item ${isActive === 1 && 'active'} `}>
          <Link to="/" onClick={() => setIsActive(1)}>
            <FaSearch size={18} />
            CONSULTAS
          </Link>
        </div>
        <div className={`menu-item ${isActive === 3 && 'active'} `}>
          <Link to="/" onClick={() => setIsActive(3)}>
            <FaClipboardCheck size={18} />
            CADASTROS
          </Link>
        </div>
        <div className={`menu-item ${isActive === 4 && 'active'} `}>
          <Link to="/" onClick={() => setIsActive(4)}>
            <FaChartPie size={18} />
            INDICADORES
          </Link>
        </div>
        <div className={`menu-item ${isActive === 5 && 'active'} `}>
          <Link to="/" onClick={() => setIsActive(5)}>
            <FaCogs size={18} />
            CONFIGURAÇÕES
          </Link>
        </div>
        <div className={`menu-item ${isActive === 5 && 'active'} `}>
          <Link to="/" onClick={() => setIsActive(5)}>
            <FaSignOutAlt size={18} />
            SAIR
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
