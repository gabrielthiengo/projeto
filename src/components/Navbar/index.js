import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaUser, FaShoppingCart, FaBell, FaBars } from 'react-icons/fa';
import Drawer from '@material-ui/core/Drawer';
import Cart from '~/components/Cart';

import './styles.css';

function Navbar() {
  const [state, setState] = useState({
    right: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <h2>HEAVEN</h2>
        <div className="navigation">
          <Link to="/">Início</Link>
          <Link to="/">Produtos</Link>
          <Link to="/store">Lojas</Link>
          <Link to="/">Favoritos</Link>
          <Link to="/">Compras</Link>
        </div>
        <div className="icons">
          <FaShoppingCart size={17} onClick={toggleDrawer('bottom', true)} />
          <FaBell size={17} />
          <Link to="/">
            <FaUser size={17} />
          </Link>
          <FaBars id="bars" size={19} onClick={toggleDrawer('right', true)} />
          <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer('right', false)}
          >
            <div className="navigation-drawer">
              <Link to="/">Início</Link>
              <Link to="/">Produtos</Link>
              <Link to="/store">Lojas</Link>
              <Link to="/">Favoritos</Link>
              <Link to="/">Compras</Link>
              <Link to="/">Sair</Link>
            </div>
          </Drawer>
          <Drawer
            anchor="bottom"
            open={state.bottom}
            onClose={toggleDrawer('bottom', false)}
          >
            <div className="cart-drawer">
              <Cart />
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
