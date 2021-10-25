import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaGift } from 'react-icons/fa';

import Checkout from '~/components/Checkout';

import './styles.css';

function Gifts({ products }) {
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleCloseModal() {
    setToggleModal(!toggleModal);
  }

  return (
    <div id="gifts" className="gift-container">
      <h2>Presentes</h2>

      {!toggleModal && (
        <p>
          Faça parte da construção desse sonho, que tal presentear os noivos?
        </p>
      )}

      {!toggleModal && (
        <div>
          {products.map(product => {
            return (
              <div key={product.Product.title} className="product-container">
                <img src={product.Product.image} alt="" />

                <h3>{product.Product.title}</h3>
                <span>
                  {product.Product.value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
                <p>
                  ou{' '}
                  <strong>
                    6x de{' '}
                    {(product.Product.value / 6).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </strong>
                </p>
                <br />

                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct(product.Product);
                    setToggleModal(true);
                    document.getElementById('gifts').scrollIntoView();
                  }}
                >
                  <FaGift /> Presentear
                </button>
              </div>
            );
          })}
        </div>
      )}
      {toggleModal && (
        <Checkout
          product={selectedProduct}
          handleCloseCheckout={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Gifts;

Gifts.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
