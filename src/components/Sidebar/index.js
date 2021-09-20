/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import {
  FaHome,
  FaSearch,
  FaChartPie,
  FaCogs,
  FaTable,
  FaSignOutAlt,
} from 'react-icons/fa';

import { signOut } from '../../store/modules/auth/actions';
import { checkUserRole } from '~/utils/functions';

import logo from '~/assets/images/logos/text.png';

import './styles.css';

function Sidebar() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);
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
          <div className={`menu-item ${isActive === 1 ? 'active' : ''} `}>
            <Link
              to="/planilhas"
              onClick={() => {
                setDisplay(false);
                setIsActive(1);
              }}
            >
              <div>
                <FaTable size={18} />
              </div>
              <p>PLANILHAS</p>
            </Link>
          </div>
          <div className={`menu-item ${isActive === 2 ? 'active' : ''} `}>
            <div
              onClick={() => {
                setIsActive(2);
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
          {checkUserRole(profile.roles.type) && (
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
          )}
          <div className={`menu-item ${isActive === 6 ? 'active' : ''} `}>
            <Link
              to="/"
              onClick={() => {
                dispatch(signOut());
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
        {selectedTab === 2 && (
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
            {checkUserRole(profile.roles.type) && (
              <div className="second-item">
                <Link to="/">
                  <strong>-</strong>
                  <p>COLABORADORES</p>
                </Link>
              </div>
            )}
            {checkUserRole(profile.roles.type) && (
              <div className="second-item">
                <Link to="/metas" onClick={() => setDisplay(false)}>
                  <strong>-</strong>
                  <p>METAS</p>
                </Link>
              </div>
            )}
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
