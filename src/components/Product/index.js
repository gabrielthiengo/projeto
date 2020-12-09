import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

function Product({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className={`${
        product.novelty === true ? 'product-link-new' : 'product-link'
      }`}
    >
      <div className="product-image">
        <img src={product.photo_url} alt="Foto Produto" />
        <div className="product-content">
          <h3>{product.title}</h3>
          <span>{product.short_description}</span>
          <h2>R$ {product.price.toFixed(2)}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Product;

Product.propTypes = {
  product: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
