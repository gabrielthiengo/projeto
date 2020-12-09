import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { FaSadCry } from 'react-icons/fa';
import './styles.css';

function Cart() {
  const { cart, total } = useSelector(state => state.cart);

  return (
    <div className="cart-container">
      <h2>Carrinho:</h2>
      <div className="cart-content">
        <div className="cart-products">
          {cart?.map(product => {
            return (
              <div key={product.product.id} className="product-item">
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img src={product.product.photo_url} alt="camisa" />
                </div>
                <div className="product-item-detail">
                  <h2>{product.product.title}</h2>
                  <br />
                  <h4>{`Valor: R$ ${product.product.price.toFixed(2)}`}</h4>
                  <h4>{`Quantidade: ${product.quantity}`}</h4>
                  <h4>{`Tamanho: ${product.size}`}</h4>
                  <h4>Total: R$ {total.toFixed(2)}</h4>
                  <br />
                  <Button id="remove-item">Remover Item</Button>
                </div>
              </div>
            );
          })}
        </div>
        {total > 0 ? (
          <div className="cart-checkout">
            <h3>Valor Total: R$ {total.toFixed(2)}</h3>
            <br />
            <Button id="checkout">Finalizar Compra</Button>
          </div>
        ) : (
          <div className="cart-checkout-empty">
            <FaSadCry size={45} color="rgb(238, 238, 238)" />
            <br />
            <h4>Ops! seu carrinho está vazio.</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
