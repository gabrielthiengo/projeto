import React from 'react';

import { Button } from '@material-ui/core';

import './styles.css';

function Cart() {
  return (
    <div className="cart-container">
      <h2>Seu Carrinho:</h2>
      <div className="cart-content">
        <div className="cart-products">
          <div className="product-item">
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              alt="camisa"
            />
            <div className="product-item-detail">
              <h2>Camisa Croácia</h2>
              <br />
              <h4>3x R$ 149,90</h4>
              <h4>Total: R$ 449,70</h4>
              <br />
              <Button id="remove-item">Remover Item</Button>
            </div>
          </div>
          <div className="product-item">
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              alt="camisa"
            />
            <div className="product-item-detail">
              <h2>Camisa Croácia</h2>
              <br />
              <h4>2x R$ 149,90</h4>
              <h4>Total: R$ 299,80</h4>
              <br /> <Button id="remove-item">Remover Item</Button>
            </div>
          </div>
          <div className="product-item">
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              alt="camisa"
            />
            <div className="product-item-detail">
              <h2>Camisa Croácia</h2>
              <br />
              <h4>2x R$ 149,90</h4>
              <h4>Total: R$ 299,80</h4>
              <br /> <Button id="remove-item">Remover Item</Button>
            </div>
          </div>
        </div>
        <div className="cart-checkout">
          <h3>Valor Total: R$ 749,50</h3>
          <br />
          <Button id="checkout">Finalizar Compra</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
