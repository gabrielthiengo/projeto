import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import { toast } from 'react-toastify';

import { FaLongArrowAltLeft, FaSearchPlus } from 'react-icons/fa';
import Loader from 'react-loader-spinner';

import InputMask from 'react-input-mask';
import {
  CheckoutModel,
  verifyFields,
  replaceCheckoutModel,
} from '~/models/Checkout';

import InputBlock from '../InputBlock';
import viaCep from '~/services/viaCep';

import './styles.css';
import api from '~/services/api';

function Checkout({ product, handleCloseCheckout }) {
  const value = Number(`${product.value.toString().replace('.', '')}0`);

  CheckoutModel.amount = value;
  CheckoutModel.item = {
    id: product.id.toString(),
    title: product.title,
    unit_price: value,
    quantity: 1,
    tangible: false,
  };

  const [checkoutModel, setCheckoutModel] = useState(CheckoutModel);
  const [loading, setLoading] = useState({ cep: false, checkout: false });

  function searchZipCode() {
    setLoading({ ...loading, cep: true });

    const zipcode = checkoutModel.address_zipcode
      .replace('.', '')
      .replace('-', '');

    viaCep
      .get(`${zipcode}/json`)
      .then(response => {
        setCheckoutModel({
          ...checkoutModel,
          address_state: response.data.uf,
          address_city: response.data.localidade,
          address_neighborhood: response.data.bairro,
          address_street: response.data.logradouro,
        });

        setLoading({ ...loading, cep: false });
      })
      .catch(() => {
        toast.error('O cep digitado não foi encontrado ou não é válido');

        setLoading({ ...loading, cep: false });
      });
  }

  async function handleSubmitCheckout() {
    setLoading({ ...loading, checkout: true });

    const { error, message } = verifyFields(checkoutModel);

    if (error) {
      toast.error(message);
      setLoading({ ...loading, checkout: false });
    } else {
      const newCheckoutModel = replaceCheckoutModel(checkoutModel);
      await api
        .post('wedding/checkout', newCheckoutModel)
        .then(response => {
          if (response.data.error) {
            toast.error(response.data.message);
          } else {
            toast.success(response.data.message);

            setCheckoutModel(CheckoutModel);
          }

          setLoading({ ...loading, checkout: false });
        })
        .catch(() => {
          toast.success('Houve um erro inesperado, tente novamente mais tarde');
          setLoading({ ...loading, checkout: false });
        });
    }
  }

  return (
    <div id="checkout" className="c-container">
      <main>
        <button
          type="button"
          onClick={() => {
            handleCloseCheckout();
          }}
        >
          <FaLongArrowAltLeft />
          Voltar para os produtos
        </button>

        <section>
          <div className="content">
            <span>CHECKOUT</span>

            <div>
              <div className="content-block">
                <p>Dados Pessoais</p>

                <div className="row-01">
                  <InputBlock label="Nome:" required>
                    <input
                      type="text"
                      value={checkoutModel.customer_name}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_name: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                </div>
                <div className="row-02">
                  <InputBlock label="CPF:" required>
                    <InputMask
                      type="text"
                      mask="999.999.999-99"
                      value={checkoutModel.customer_document_number}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_document_number: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                  <InputBlock label="Celular:" required>
                    <InputMask
                      type="text"
                      mask="(99) 9 9999-9999"
                      value={checkoutModel.customer_phone_number}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_phone_number: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                </div>
                <div className="row-02">
                  <InputBlock label="Data de Nascimeneto:" required>
                    <InputMask
                      type="text"
                      mask="99/99/9999"
                      value={checkoutModel.customer_birthday}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_birthday: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                  <InputBlock label="E-mail:" required>
                    <input
                      type="text"
                      value={checkoutModel.customer_email}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          customer_email: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                </div>
              </div>
              <div className="content-block">
                <p>Endereço</p>

                <div className="row-01">
                  <InputBlock label="CEP:" required>
                    <InputMask
                      type="text"
                      mask="99.999-999"
                      value={checkoutModel.address_zipcode}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          address_zipcode: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                  {!loading.cep ? (
                    <FaSearchPlus
                      onClick={() => {
                        searchZipCode();
                      }}
                      title="Buscar CEP"
                    />
                  ) : (
                    <div className="spinner">
                      <Loader
                        type="Oval"
                        color="#04d361"
                        height={20}
                        width={20}
                      />
                    </div>
                  )}
                </div>
                <div className="row-02">
                  <InputBlock label="Rua:" required>
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
                  </InputBlock>
                  <InputBlock label="Número:" required>
                    <input
                      type="text"
                      value={checkoutModel.address_street_number}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          address_street_number: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                </div>
                <div className="row-03">
                  <InputBlock label="Bairro:" required>
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
                  </InputBlock>
                  <InputBlock label="Cidade:" required>
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
                  </InputBlock>
                  <InputBlock label="Estado:" required>
                    <input
                      type="text"
                      value={checkoutModel.address_state}
                      onChange={e => {
                        setCheckoutModel({
                          ...checkoutModel,
                          address_state: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                </div>
              </div>
            </div>
          </div>
          <div className="card-info">
            <div className="content-block">
              <p>Dados do Cartão</p>

              <div className="row-02">
                <InputBlock label="Número do Cartão:" required>
                  <InputMask
                    type="text"
                    mask="9999 9999 9999 9999"
                    value={checkoutModel.card_number}
                    onChange={e => {
                      setCheckoutModel({
                        ...checkoutModel,
                        card_number: e.target.value,
                      });
                    }}
                  />
                </InputBlock>
                <InputBlock label="Nome do Titular:" required>
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
                </InputBlock>
              </div>
              <div className="row-03">
                <InputBlock label="Validade:" required>
                  <InputMask
                    type="text"
                    mask="99/99"
                    value={checkoutModel.card_expiration_date}
                    onChange={e => {
                      setCheckoutModel({
                        ...checkoutModel,
                        card_expiration_date: e.target.value,
                      });
                    }}
                  />
                </InputBlock>
                <InputBlock label="CVV:" required>
                  <InputMask
                    type="text"
                    mask="999"
                    value={checkoutModel.card_cvv}
                    onChange={e => {
                      setCheckoutModel({
                        ...checkoutModel,
                        card_cvv: e.target.value,
                      });
                    }}
                  />
                </InputBlock>
                <InputBlock label="Número de Parcelas:" required>
                  <select
                    name="payment"
                    id="payment"
                    defaultValue={1}
                    onChange={e => {
                      setCheckoutModel({
                        ...checkoutModel,
                        portion_number: e.target.value,
                      });
                    }}
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
                </InputBlock>
              </div>
            </div>
            <div className="content-block">
              <p>Presente</p>

              <section className="c-gift">
                <span>
                  1x {product.title}
                  <strong>
                    {product.value.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </strong>
                </span>
              </section>

              <footer>
                <button
                  className="finish"
                  type="button"
                  onClick={() => {
                    handleSubmitCheckout();
                  }}
                >
                  {!loading.checkout ? (
                    'Finalizar'
                  ) : (
                    <Loader type="Oval" color="#fff" height={20} width={20} />
                  )}
                </button>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;

Checkout.propTypes = {
  handleCloseCheckout: PropTypes.oneOfType([PropTypes.func]).isRequired,
  product: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
