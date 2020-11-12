/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { FaExclamationTriangle } from 'react-icons/fa';
import logotipo from '~/assets/images/Logotipo.svg';
import './styles.css';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img src={logotipo} alt="Logotipo" />
      </div>
      <div className="sidebar-content">
        <img
          className="avatar"
          src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
          alt="Avatar"
        />
        <label> Gabriel Thiengo </label>
        <div className="sidebar-detail">
          <label>Últimas atividades:</label>

          <div className="activities-empty">
            <FaExclamationTriangle size={22} />
            <label>Parece que você não tem atividades!</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
