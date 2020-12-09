import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Menu, Drawer, MenuItem } from '@material-ui/core';

import { FaShoppingCart, FaTrash, FaMehRollingEyes } from 'react-icons/fa';
import './styles.css';

import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart } from '../../store/modules/cart/actions';
import { store } from '~/store';

function Navbar() {
  const dispatch = useDispatch();
  const { signed } = store.getState().auth;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = useState({
    top: false,
    bottom: false,
  });
  const { cart, total } = useSelector(appState => appState.cart);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <header className="navbar-header">
        <Link to="/">
          <h1>DEVSTORE</h1>
        </Link>
        <div className="navbar-content">
          <FaShoppingCart
            id="cart"
            style={{ cursor: 'pointer' }}
            size={25}
            color="#fff"
            onClick={toggleDrawer('bottom', true)}
          />

          {signed ? (
            <Button
              id="menu"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Menu
            </Button>
          ) : (
            <Link
              id="btn-acess"
              to="/signin"
              className="btn-def-small"
              style={{ marginLeft: '20px' }}
            >
              Entrar
            </Link>
          )}
          <button
            onClick={toggleDrawer('top', true)}
            type="button"
            className="css-erca8v"
          >
            <div className="css-a33pix" />
          </button>
        </div>
      </header>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
      >
        <div className="navigation-drawer">
          <header className="drawer-header">
            <Button onClick={toggleDrawer('top', false)}>FECHAR</Button>
          </header>
          <div className="drawer-content">
            <Link to="/">INÍCIO</Link>
            <Link to="/">FAVORITOS</Link>
            {signed ? (
              <Link to="/">MINHAS COMPRAS</Link>
            ) : (
              <Link to="/signin">ENTRAR</Link>
            )}
            {signed && <Link to="/">MINHA CONTA</Link>}
            <Link to="/">SAIR</Link>
          </div>
        </div>
      </Drawer>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
      >
        <div className="navigation-drawer-cart">
          <header className="drawer-header">
            <Button onClick={toggleDrawer('bottom', false)}>FECHAR</Button>
          </header>
          <div className="drawer-content">
            <h2>Meu Carrinho</h2>

            <div className="cart-product">
              {cart.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>PRODUTO</th>
                      <th id="actions">QTD.</th>
                      <th id="actions">TAM.</th>
                      <th>SUBTOTAL</th>
                      <th id="actions">AÇÕES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(carts => {
                      return (
                        <tr key={carts.product.id}>
                          <td>{carts.product.title}</td>
                          <td id="actions">{carts.quantity}</td>
                          <td id="actions">{carts.size}</td>
                          <td>R$ {carts.product.price?.toFixed(2)}</td>
                          <td id="actions">
                            <FaTrash
                              onClick={() => {
                                dispatch(
                                  removeProductFromCart(carts.product.id)
                                );
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="cart-empty">
                  <FaMehRollingEyes size={40} />
                  <h3>Seu Carrinho está vazio...</h3>
                </div>
              )}
              <div className="cart-total">
                <header className="cart-total-header">
                  <h4>CHECKOUT</h4>

                  <div className="checkout-detail">
                    <h4>DESCONTO (-):</h4>
                    <h3>R$ 0.00</h3>
                  </div>
                  <div className="checkout-detail">
                    <h4>FRETE (+):</h4>
                    <h3>R$ 0.00</h3>
                  </div>
                  <div className="checkout-detail">
                    <h4>TOTAL DO PEDIDO (=):</h4>
                    <h3>R$ {total.toFixed(2)}</h3>
                  </div>
                  {cart.length > 0 && (
                    <div className="checkout-detail">
                      <Link id="finish" to="/checkout">
                        FINALIZAR
                      </Link>
                    </div>
                  )}
                </header>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Favoritos</MenuItem>
          <MenuItem onClick={handleClose}>Minhas Compras</MenuItem>
          <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
          <MenuItem onClick={handleClose}>Sair</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
