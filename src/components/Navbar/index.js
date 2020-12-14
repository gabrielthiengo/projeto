/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Menu, Drawer, MenuItem } from '@material-ui/core';

import { FaShoppingCart, FaTrash, FaMehRollingEyes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import './styles.css';

import { signOut } from '~/store/modules/auth/actions';
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

  function handleSignOut() {
    dispatch(signOut());

    toast.success('Logout realizado com sucesso!');
  }

  return (
    <div className="navbar">
      <header className="navbar-header">
        <Link to="/">
          <h1>DEVSTORE</h1>
        </Link>
        <div className="navbar-content">
          <div onClick={toggleDrawer('bottom', true)}>
            <FaShoppingCart
              id="cart"
              style={{ cursor: 'pointer' }}
              size={25}
              color="#fff"
            />
            {cart.length > 0 && <div className="item-count">{cart.length}</div>}
          </div>

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
            {signed && <Link to="/profile">MINHA CONTA</Link>}
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
                      <th id="actions">COR</th>
                      <th>SUBTOTAL</th>
                      <th id="actions">AÇÕES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(carts => {
                      return (
                        <tr key={carts.product.code}>
                          <td>{carts.product.title}</td>
                          <td id="actions">{carts.product.quantity}</td>
                          <td id="actions">{carts.product.size}</td>
                          <td id="actions">{carts.product.color}</td>
                          <td>R$ {carts.product.price?.toFixed(2)}</td>
                          <td id="actions">
                            <FaTrash
                              onClick={() => {
                                dispatch(
                                  removeProductFromCart(carts.product.code)
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
          <MenuItem onClick={handleClose}>
            <Link to="/">Favoritos</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/">Minhas Compras</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/profile">Minha Conta</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <button id="signin-out" onClick={handleSignOut} type="submit">
              Sair
            </button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
