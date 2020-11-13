import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaPencilRuler,
  FaArchive,
  FaWallet,
  FaRedoAlt,
  FaSignOutAlt,
  FaCogs,
  FaHome,
  FaBars,
} from 'react-icons/fa';

import { store } from '~/store';

import './styles.css';

function Sidebar() {
  const { avatar, name, email } = store.getState().user.profile;

  return (
    <>
      <div className="navigation-container">
        <div className="header-options">
          <Link to="/profile">
            <FaCogs size={18} />
          </Link>

          <FaBars size={18} onClick={() => {}} />
        </div>
        <div className="user-container">
          <div className="avatar">
            <img src={avatar} alt="User Avatar" />
          </div>
          <p className="user-name">{name}</p>
          <p>{email}</p>
        </div>

        <Link to="/dashboard">
          <FaHome size={15} />
          <h2>Home</h2>
        </Link>
        <Link to="/works">
          <FaArchive size={15} />
          <h2>Trabalhos</h2>
        </Link>
        <Link to="/dashboard">
          <FaPencilRuler size={15} />
          <h2>Tarefas</h2>
        </Link>
        <Link to="/dashboard">
          <FaWallet size={15} />
          <h2>Carteira</h2>
        </Link>
        <Link to="/dashboard">
          <FaRedoAlt size={15} />
          <h2>Retiradas</h2>
        </Link>
        <Link to="/dashboard">
          <FaSignOutAlt size={15} />
          <h2>Sair</h2>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
