/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaRegEdit, FaBoxes, FaExclamationTriangle } from 'react-icons/fa';
import Rating from '@material-ui/lab/Rating';
import { Pagination } from '@material-ui/lab/';
import Loading from '~/components/Loading';

import './styles.css';

import api from '~/services/api';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`products?page=${currPage}&search=${search}`)
      .then(response => {
        setProducts(response.data);
        setIsSubmit(false);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [currPage, isSubmit]);

  function handleChangePage(event, value) {
    setCurrPage(value);
  }

  return (
    <div className="page-container product-container">
      <header>
        <div>
          <FaBoxes size={25} color="#F14723" />
          <p>PRODUTOS</p>
        </div>

        <div className="search">
          <input
            type="text"
            value={search}
            placeholder="Faça sua busca"
            onChange={e => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="btn-primary"
            onClick={() => setIsSubmit(true)}
          >
            BUSCAR
          </button>
          <button
            type="submit"
            className="btn-secondary"
            onClick={() => {
              setIsSubmit(true);
              setSearch('');
            }}
          >
            LIMPAR
          </button>
        </div>
      </header>
      <main>
        <div>
          <table>
            <thead>
              <tr>
                <th>AÇÕES</th>
                <th>CÓDIGO</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>TOTAL VENDIDO</th>
                <th>AVALIAÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {products.products?.length !== 0 ? (
                products.products?.map(product => {
                  return (
                    <tr key={product.id}>
                      <td
                        id="actions"
                        style={{ textAlign: 'center', width: '50px' }}
                      >
                        <Link to={`/produto/info/${product.id}`}>
                          <FaRegEdit size={20} />
                        </Link>
                      </td>
                      <td>{product.w_product_id}</td>
                      <td>{product.name}</td>
                      <td>
                        <p>
                          {product.price > 0
                            ? parseFloat(product.price).toLocaleString(
                                'pt-BR',
                                {
                                  style: 'currency',
                                  currency: 'BRL',
                                }
                              )
                            : 'R$ 0,00'}
                        </p>
                      </td>
                      <td>
                        <p>{product.total_sales}</p>
                      </td>
                      <td>
                        <p>
                          <Rating
                            name="simple-controlled"
                            value={product.average_rating}
                            readOnly
                          />
                        </p>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>
                    <div style={{ width: '100%' }} className="is-empty">
                      <FaExclamationTriangle size={30} />
                      <h4>Nenhum produto a ser exibido</h4>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="pagination">
            <Pagination
              count={products.total}
              color="primary"
              showFirstButton
              showLastButton
              onChange={handleChangePage}
            />
          </div>
        </div>
      </main>
      {isLoading && <Loading />}
    </div>
  );
}

export default ProductList;
