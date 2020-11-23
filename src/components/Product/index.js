import React from 'react';

import { FaRegHeart, FaPlusCircle } from 'react-icons/fa';
import './styles.css';

function Product({ title, image, price, store }) {
  return (
    <div className="product-container">
      <img src={image} alt="Imagem" />

      <h3>{title}</h3>
      <h4>{price}</h4>

      <div className="product-footer">
        <h5>{store}</h5>
        <div className="product-icons">
          <FaRegHeart color="red" />
          <FaPlusCircle color="green" />
        </div>
      </div>
    </div>
  );
}

export default Product;
