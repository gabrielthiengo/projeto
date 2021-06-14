/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  FaUsers,
  FaExclamationTriangle,
  FaLongArrowAltLeft,
} from 'react-icons/fa';
import CurrencyFormat from 'react-currency-format';
import Rating from '@material-ui/lab/Rating';

import './styles.css';

import api from '~/services/api';

function ProductView() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState('0');

  useEffect(() => {
    api
      .get(`products/show?id=${productId}`)
      .then(response => {
        setProduct(response.data);
        setRating(response.data.average_rating);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(true));
  }, [isLoading]);

  return (
    <div className="product-view">
      <header>
        <div>
          <Link to="/produtos">
            <FaLongArrowAltLeft />
            VOLTAR
          </Link>
          <section>
            <FaUsers size={25} color="#F14723" />
            <p>{product?.name.toUpperCase()}</p>
          </section>
        </div>
      </header>

      <main>
        <img src={product?.image} alt="product" />
        <div className="product-detail">
          <h4>DETALHES DO PRODUTO</h4>

          <div>
            <p>{product?.short_description}</p>

            <span>STATUS DO ESTOQUE: {product?.stock_status}</span>
            <span>QUANTIDADE EM ESTOQUE: {product?.stock_quantity}</span>
            <span>TOTAL VENDIDO: {product?.total_sales}</span>
            <span>
              PREÇO:{' '}
              <CurrencyFormat
                value={product?.price}
                displayType="text"
                thousandSeparator
                prefix="R$ "
                renderText={value => <span>{value}</span>}
              />
            </span>
            <span>
              PREÇO DE VENDA:{' '}
              <CurrencyFormat
                value={product?.sale_price}
                displayType="text"
                thousandSeparator
                prefix="R$ "
                renderText={value => <span>{value}</span>}
              />
            </span>
            <span>
              AVALIAÇÕES:{' '}
              <Rating name="simple-controlled" value={rating} readOnly />
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductView;
