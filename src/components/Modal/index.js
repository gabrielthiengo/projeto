import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import './styles.css';

function Modal({ confirmCheckout, handleCloseModal, product }) {
  const [checkout, setCheckout] = useState(null);
  const [paymentType, setPaymentType] = useState('select');
  const [portionNumber, setPortionNumber] = useState(1);

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h3>Obrigado por nos presentar!</h3>

        <div className="checkout">
          <div style={{ width: '49%' }}>
            <div className="input-block">
              <span>Forma de Pagamento:</span>
              <select
                name="payment"
                id="payment"
                value={paymentType}
                onChange={e => setPaymentType(e.target.value)}
              >
                <option value="select">Selecione</option>
                <option value="boleto">Boleto</option>
                <option value="cartao">Cartão de Crédito</option>
              </select>
            </div>
          </div>

          <br />

          {paymentType === 'boleto' && (
            <div className="container">
              <p>boleto</p>
            </div>
          )}
          {paymentType === 'cartao' && (
            <div>
              <div className="container">
                <div className="input-block">
                  <span>Nome:</span>
                  <input
                    type="text"
                    onChange={e => {
                      setCheckout({
                        ...checkout,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-block">
                  <span>CPF:</span>
                  <input
                    type="text"
                    onChange={e => {
                      setCheckout({
                        ...checkout,
                        cpf: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="container">
                <div className="input-block">
                  <span>Número do Cartão:</span>
                  <input
                    type="text"
                    onChange={e => {
                      setCheckout({
                        ...checkout,
                        credit_card: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-block">
                  <span>Número de Parcelas:</span>
                  <select
                    name="payment"
                    id="payment"
                    value={portionNumber}
                    onChange={e => setPortionNumber(e.target.value)}
                  >
                    <option value="1">
                      1x de{' '}
                      {(product.value / 1).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </option>
                    <option value="2">
                      2x de{' '}
                      {(product.value / 2).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </option>
                    <option value="3">
                      3x de{' '}
                      {(product.value / 3).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </option>
                    <option value="4">
                      4x de{' '}
                      {(product.value / 4).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </option>
                    <option value="5">
                      5x de{' '}
                      {(product.value / 5).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </option>
                    <option value="6">
                      6x de{' '}
                      {(product.value / 6).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </option>
                  </select>
                </div>
              </div>
              <div className="container">
                <div className="input-block">
                  <span>Titular:</span>
                  <input
                    type="text"
                    onChange={e => {
                      setCheckout({
                        ...checkout,
                        owner: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-block">
                  <span>Validade:</span>
                  <input
                    type="text"
                    onChange={e => {
                      setCheckout({
                        ...checkout,
                        expire_date: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-block">
                  <span>CSV:</span>
                  <input
                    type="number"
                    min="0"
                    onChange={e => {
                      setCheckout({
                        ...checkout,
                        security_code: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="product-detail">
            <div className="product">
              <span>{product.title}</span>
              <p>
                <strong>
                  {portionNumber}x de{' '}
                  {(product.value / portionNumber).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>
              </p>
            </div>
          </div>
        </div>

        <footer>
          <button
            className="cancel"
            type="button"
            onClick={() => {
              handleCloseModal();
            }}
          >
            Cancelar
          </button>
          <button
            disabled={paymentType === 'select'}
            className="finish"
            type="button"
            onClick={() => {
              confirmCheckout();
            }}
          >
            Finalizar
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  confirmCheckout: PropTypes.oneOfType([PropTypes.func]).isRequired,
  handleCloseModal: PropTypes.oneOfType([PropTypes.func]).isRequired,
  product: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
