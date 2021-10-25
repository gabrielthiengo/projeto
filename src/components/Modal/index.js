/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import { CheckoutModel, verifyFields } from '~/models/Checkout';

import viaCep from '~/services/viaCep';

import './styles.css';

function Modal({ confirmCheckout, handleCloseModal, product }) {
  const [step, setStep] = useState(1);
  const [portionNumber, setPortionNumber] = useState(1);
  const [checkoutModel, setCheckoutModel] = useState(CheckoutModel);

  function searchZipCode() {
    viaCep.get(`${checkoutModel.address_zipcode}/json`).then(response => {
      setCheckoutModel({
        ...checkoutModel,
        address_country: response.data.localidade,
        address_state: response.data.uf,
        address_city: response.data.localidade,
        address_neighborhood: response.data.bairro,
        address_street: response.data.logradouro,
      });
    });
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h3>Obrigado por nos presentar!</h3>

        {step === 1 ? (
          <div className="checkout">
            <div>
              <div className="content-block">
                <p>Dados Pessoais</p>
                <div className="container">
                  <div className="input-block">
                    <span>Nome:</span>
                    <input
                      type="text"
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="input-block">
                    <span>CPF:</span>
                    <input
                      type="text"
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_document_number: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="input-block">
                    <span>Telefone:</span>
                    <input
                      type="text"
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_phone_number: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="container">
                  <div className="input-block">
                    <span>Data de Nascimento:</span>
                    <input
                      type="text"
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_birthday: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="input-block">
                    <span>E-mail:</span>
                    <input
                      type="text"
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_email: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="content-block">
                <p>Dados do Cartão</p>
                <div className="container">
                  <div className="input-block">
                    <span>Número:</span>
                    <input
                      type="text"
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          card_number: e.target.value,
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
                      value={checkoutModel.card_holder_name}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          card_holder_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="input-block">
                    <span>Validade:</span>
                    <input
                      type="text"
                      value={checkoutModel.card_expiration_date}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          card_expiration_date: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="input-block">
                    <span>CVV:</span>
                    <input
                      type="number"
                      value={checkoutModel.card_cvv}
                      min="0"
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          card_cvv: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="content-block">
                <p>Endereço</p>
                <div className="container">
                  <div className="input-block">
                    <span>CEP:</span>
                    <input
                      type="text"
                      value={checkoutModel.address_zipcode}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          address_zipcode: e.target.value,
                        });

                        if (checkoutModel.address_zipcode.length === 8) {
                          searchZipCode();
                        }
                      }}
                    />
                  </div>
                  <div className="input-block">
                    <span>Rua:</span>
                    <input
                      type="text"
                      value={checkoutModel.address_street}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          address_street: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="input-block">
                    <span>Número:</span>
                    <input
                      type="text"
                      value={checkoutModel.address_number}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          address_number: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="container">
                  <div className="input-block">
                    <span>Bairro:</span>
                    <input
                      type="text"
                      value={checkoutModel.address_neighborhood}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          address_neighborhood: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="input-block">
                    <span>Cidade:</span>
                    <input
                      type="text"
                      value={checkoutModel.address_city}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          address_city: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="input-block">
                    <span>Estado:</span>
                    <input
                      type="text"
                      min="0"
                      value={checkoutModel.address_state}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          address_state: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

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
        ) : (
          <div>teste</div>
        )}

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
            className="finish"
            type="button"
            onClick={() => {
              console.log(checkoutModel);
              // confirmCheckout();
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
