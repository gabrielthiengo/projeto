/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Pagination } from '@material-ui/lab';
import Loader from 'react-loader-spinner';
import Navbar from '~/components/Navbar';
import Product from '~/components/Product';
import Footer from '~/components/Footer';
import Input from '~components/Input';

import api from '~/services/api';
import { store } from '~/store';

import './styles.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [filtered, setFiltered] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { signed } = store.getState().auth;
  const formRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    if (products.length === 0) {
      window.scrollTo(0, 0);
    }

    if (products.length > 0) {
      window.scrollTo(0, 700);
    }

    async function loadProducts() {
      const response = await api.get(`product/${currPage}`);
      setProducts(response.data.data);
      setTotalPage(response.data.lastPage);
    }

    if (!filtered) {
      loadProducts();
    }
    setIsLoading(false);
  }, [filtered, currPage]);

  function handleChangePage(event, value) {
    setCurrPage(value);
  }

  async function handleSelectFilter(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Informe um nome'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.get(`filter-products/${data.name}`);

      setFiltered(true);
      setProducts(response.data.product);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <div className="wrapper-container">
      <Navbar />

      <main>
        <section className="home-section">
          <div className="banner w3-animate-opacity">
            <img
              src="https://www.lojavirtual.com.br/wp-content/uploads/2018/10/banner03.jpg"
              alt="Banner"
            />
          </div>
          <div className="section-header w3-animate-left">
            <h1>
              Temos os melhores produtos para o DEV<b>.</b>
            </h1>
          </div>
          {!signed && (
            <div className="section-subheader w3-animate-left">
              <p>
                Faça login ou cadastre-se para ficar por dentro de todas as
                novidades.
              </p>
              <Link to="/signin" className="btn-def">
                JUNTE-SE A NÓS
              </Link>
            </div>
          )}
          <div className="section-filter w3-animate-right">
            <Form ref={formRef} onSubmit={handleSelectFilter}>
              <div className="form-input">
                <Input
                  name="name"
                  label="Nome"
                  autoComplete="off"
                  type="text"
                />
                <Input
                  name="category"
                  label="Categoria"
                  autoComplete="off"
                  type="text"
                />
                <Input
                  name="min_price"
                  label="Preço Mínimo"
                  autoComplete="off"
                  type="text"
                />
                <Input
                  name="max_price"
                  label="Preço Máximo"
                  autoComplete="off"
                  type="text"
                />
              </div>
              <div className="filter-bottom">
                <button
                  className="btn-def-secondary-small"
                  type="button"
                  style={{ marginRight: '10px' }}
                  onClick={() => {
                    setFiltered(false);
                  }}
                >
                  Limpar
                </button>
                <button className="btn-def-small" type="submit">
                  Filtrar
                </button>
              </div>
            </Form>
          </div>
          <div className="section-body w3-animate-bottom">
            <div className="section-title">
              <div className="css-line" />
              <h3>Produtos que possam te interessar:</h3>
            </div>
            {!isLoading ? (
              <>
                <div className="section-content">
                  {products.map(product => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>

                <div className="pagination">
                  <Pagination
                    onChange={handleChangePage}
                    count={totalPage}
                    shape="rounded"
                  />
                </div>
              </>
            ) : (
              <div
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginTop: '70px',
                }}
              >
                <Loader
                  type="Oval"
                  color="rgb(147, 130, 215)"
                  height={50}
                  width={100}
                />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
