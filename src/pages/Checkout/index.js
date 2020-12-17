import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Navbar from '~/components/Navbar';

import { store } from '~/store';
import { cepMask } from '~/utils/functions';

import './styles.css';

function Checkout() {
  const { cart, total } = useSelector(appState => appState.cart);
  const [valueDiscount, setValueDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [zipCode, setZipCode] = useState(
    store.getState().user.profile.address.zip_code
  );
  const [freight, setFreight] = useState(0);

  function handleDiscount() {
    if (discount === 0 || discount < 0) {
      toast.error('Insira um código de desconto válido');
    }
  }

  function handleFreight() {
    if (zipCode === '') {
      toast.error('Insira um cep válido');
    }
  }

  return (
    <div className="wrapper-container">
      <Navbar />

      <main>
        <section className="checkout-container">
          <h3 className="w3-animate-right">Finalizar Compra</h3>
          <hr />

          <div className="main-checkout w3-animate-bottom">
            <div style={{ flex: '1' }} className="checkout-support">
              {cart.map(product => {
                return (
                  <div key={product.product.code} className="checkout-products">
                    <h4>{product.product.title}</h4>

                    <h4>{product.product.quantity}</h4>
                    <h4>R$ {product.product.price.toFixed(2)}</h4>
                  </div>
                );
              })}
            </div>

            <div className="cart-total">
              <header className="cart-total-header">
                <h4>CHECKOUT</h4>

                <div className="checkout-detail">
                  <div className="container-input">
                    <input
                      className="input-checkout"
                      type="text"
                      placeholder="Código do Cupom"
                    />
                    <button
                      className="button-checkout"
                      type="submit"
                      onClick={handleDiscount}
                    >
                      Utilizar
                    </button>
                  </div>
                  <h4>DESCONTO (-):</h4>
                  <h3>R$ 0.00</h3>
                </div>
                <div className="checkout-detail">
                  <div className="container-input">
                    <input
                      className="input-checkout"
                      type="text"
                      placeholder="Cep"
                      onChange={e => setZipCode(e.target.value)}
                      value={cepMask(zipCode)}
                    />
                    <button
                      className="button-checkout"
                      type="submit"
                      onClick={handleFreight}
                    >
                      Calcular
                    </button>
                  </div>
                  <h4>FRETE (+):</h4>
                  <h3>R$ 0.00</h3>
                </div>
                <div className="checkout-detail">
                  <h4>TOTAL DO PEDIDO (=):</h4>
                  <h3>R$ {total.toFixed(2)}</h3>
                </div>
                {cart.length > 0 && (
                  <div className="checkout-detail">
                    <button id="finish" type="submit">
                      COMPRAR
                    </button>
                  </div>
                )}
              </header>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;
