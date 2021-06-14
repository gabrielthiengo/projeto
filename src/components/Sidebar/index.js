/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  const [display, setDisplay] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="dflex column sidebar">
      <div className="sidebar-content">
        <header>
          <img src={logo} alt="logotipo" />
        </header>

        <div className="menu-content">
          <div className={`menu-item ${isActive === 0 ? 'active' : ''} `}>
            <Link
              to="/"
              onClick={() => {
                setDisplay(false);
                setIsActive(0);
              }}
            >
              <div>
                <FaHome size={18} />
              </div>
              <p>INÍCIO</p>
            </Link>
          </div>
          <div className={`menu-item ${isActive === 3 ? 'active' : ''} `}>
            <div
              onClick={() => {
                setIsActive(3);
                setSelectedTab(1);

                if (display && selectedTab === 1) {
                  setDisplay(!display);
                } else {
                  setDisplay(true);
                }
              }}
            >
              <div>
                <FaClipboardCheck size={18} />
              </div>
              <p>CADASTROS</p>
            </div>
          </div>
          <div className={`menu-item ${isActive === 1 ? 'active' : ''} `}>
            <div
              onClick={() => {
                setIsActive(1);
                setSelectedTab(2);
                if (display && selectedTab === 2) {
                  setDisplay(!display);
                } else {
                  setDisplay(true);
                }
              }}
            >
              <div>
                <FaSearch size={18} />
              </div>
              <p>CONSULTAS</p>
            </div>
          </div>

          <div className={`menu-item ${isActive === 4 ? 'active' : ''} `}>
            <Link
              to="/indicadores"
              onClick={() => {
                setIsActive(4);
                setDisplay(false);
              }}
            >
              <div>
                <FaChartPie size={18} />
              </div>
              <p>INDICADORES</p>
            </Link>
          </div>
          <div className={`menu-item ${isActive === 5 ? 'active' : ''} `}>
            <Link
              to="/"
              onClick={() => {
                setIsActive(5);
                setDisplay(false);
              }}
            >
              <div>
                <FaCogs size={18} />
              </div>
              <p>CONFIGURAÇÕES</p>
            </Link>
          </div>
          <div className={`menu-item ${isActive === 6 ? 'active' : ''} `}>
            <Link
              to="/"
              onClick={() => {
                setIsActive(6);
                setDisplay(false);
              }}
            >
              <div>
                <FaSignOutAlt size={18} />
              </div>
              <p>SAIR</p>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="second-layer"
        style={{ display: `${display ? 'block' : 'none'}` }}
      >
        {selectedTab === 1 ? (
          <div>
            <div className="second-item">
              <Link to="/">
                <strong>-</strong>
                <p>COLABORADORES</p>
              </Link>
            </div>
            <div className="second-item">
              <Link to="/">
                <strong>-</strong>
                <p>METAS</p>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="second-item">
              <Link to="/">
                <strong>-</strong>
                <p>ATIVIDADES</p>
              </Link>
            </div>
            <div className="second-item">
              <Link to="/clientes" onClick={() => setDisplay(false)}>
                <strong>-</strong>
                <p>CLIENTES</p>
              </Link>
            </div>
            <div className="second-item">
              <Link to="/">
                <strong>-</strong>
                <p>CUPONS</p>
              </Link>
            </div>
            <div className="second-item">
              <Link to="/">
                <strong>-</strong>
                <p>PEDIDOS</p>
              </Link>
            </div>
            <div className="second-item">
              <Link to="/produtos" onClick={() => setDisplay(false)}>
                <strong>-</strong>
                <p>PRODUTOS</p>
              </Link>
            </div>
            <div className="second-item">
              <Link to="/">
                <strong>-</strong>
                <p>REEMBOLSOS</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
