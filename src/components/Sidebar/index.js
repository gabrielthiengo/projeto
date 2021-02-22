import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FaHome,
  FaTag,
  FaComments,
  FaStore,
  FaWindowRestore,
  FaClipboardCheck,
} from 'react-icons/fa';

import './styles.css';

function Sidebar({ home, calls, collection, products, orders, store }) {
  return (
    <div className="dflex column sidebar">
      <header>Dashboard</header>

      <Link to="/" className={`menu-item ${home && 'active'} `}>
        <div className="dflex center">
          <FaHome />
          Início
        </div>
      </Link>
      <Link to="/chamados" className={`menu-item ${calls && 'active'} `}>
        <div className="dflex center">
          <FaComments />
          Chamados
        </div>
      </Link>
      <Link to="/colecao" className={`menu-item ${collection && 'active'} `}>
        <div className="dflex center">
          <FaWindowRestore />
          Coleção
        </div>
      </Link>
      <Link to="/pedidos" className={`menu-item ${orders && 'active'} `}>
        <div className="dflex center">
          <FaClipboardCheck />
          Pedidos
        </div>
      </Link>
      <Link to="/produtos" className={`menu-item ${products && 'active'} `}>
        <div className="dflex center">
          <FaTag />
          Produtos
        </div>
      </Link>
      <Link to="/loja" className={`menu-item ${store && 'active'} `}>
        <div className="dflex center">
          <FaStore />
          Loja
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  home: PropTypes.bool,
  calls: PropTypes.bool,
  collection: PropTypes.bool,
  products: PropTypes.bool,
  orders: PropTypes.bool,
  store: PropTypes.bool,
};

Sidebar.defaultProps = {
  home: true,
  calls: false,
  collection: false,
  products: false,
  orders: false,
  store: false,
};
