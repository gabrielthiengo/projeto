import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import {
  FaPencilRuler,
  FaArchive,
  FaWallet,
  FaRedoAlt,
  FaSignOutAlt,
  FaCogs,
  FaHome,
} from 'react-icons/fa';
import logo from '~/assets/images/icons/coolicons.svg';

import './styles.css';

function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <div className="logo-icon">
          <Link to="/dashboard">
            <img src={logo} alt="Logotipo" />
          </Link>
        </div>

        <Link to="/dashboard" data-tip="Home">
          <FaHome size={22} color="#2E3A59" />
        </Link>
        <Link to="/works" data-tip="Trabalhos">
          <FaArchive size={22} color="orange" />
        </Link>
        <Link to="/dashboard" data-tip="Tarefas">
          <FaPencilRuler size={22} color="#7159c1" />
        </Link>
        <Link to="/dashboard" data-tip="Carteira">
          <FaWallet size={22} color="green" />
        </Link>
        <Link to="/dashboard" data-tip="Retiradas">
          <FaRedoAlt size={22} color="#008080" />
        </Link>
        <Link to="/profile" data-tip="Configurações">
          <FaCogs size={22} color="#2E3A59" />
        </Link>
        <Link to="/dashboard" data-tip="Sair">
          <FaSignOutAlt size={22} color="#2E3A59" />
        </Link>
      </div>
      <ReactTooltip place="bottom" />
    </>
  );
}

export default Navigation;
