/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { FaBoxes, FaLongArrowAltLeft } from 'react-icons/fa';
import CurrencyFormat from 'react-currency-format';
import Rating from '@material-ui/lab/Rating';
import Modal from '~/components/Modal';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';

import './styles.css';

import api from '~/services/api';

function ProductView() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState('0');
  const [toggleModal, setToggleModal] = useState(false);

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

  async function handleSubmit() {}

  return (
    <div className="product-view">
      <header>
        <div>
          <Link to="/produtos">
            <FaLongArrowAltLeft />
            VOLTAR
          </Link>
          <section>
            <div>
              <FaBoxes size={25} color="#F14723" />
              <p>{product?.name.toUpperCase()}</p>
            </div>
            <button
              type="button"
              className="btn-primary"
              onClick={() => setToggleModal(true)}
            >
              Editar
            </button>
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
              {product?.price >= 0
                ? parseFloat(product.price).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : 'R$ 0,00'}
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
      {toggleModal && (
        <Modal title="Editar Produto">
          <Form onSubmit={handleSubmit}>
            <section>
              <div className="row">
                <Input
                  name="value"
                  label="Nome"
                  type="text"
                  value={product.name}
                  onChange={e =>
                    setProduct({
                      ...product,
                      name: e.target.value,
                    })
                  }
                />
                <div className="input-content">
                  <label htmlFor="type">Tipo</label>
                  <div className="input-block">
                    <select
                      name="type"
                      id="type"
                      value={product.type}
                      onChange={e =>
                        setProduct({
                          ...product,
                          type: e.target.value,
                        })
                      }
                    >
                      <option value={0}>Selecione</option>
                      <option value="vendas">Meta de vendas</option>
                      <option value="clientes">Prospecção de clientes</option>
                    </select>
                  </div>
                </div>
                <div className="input-content">
                  <label htmlFor="type">Status</label>
                  <div className="input-block">
                    <select
                      name="type"
                      id="type"
                      value={product.type}
                      onChange={e =>
                        setProduct({
                          ...product,
                          type: e.target.value,
                        })
                      }
                    >
                      <option value={0}>Selecione</option>
                      <option value="vendas">Meta de vendas</option>
                      <option value="clientes">Prospecção de clientes</option>
                    </select>
                  </div>
                </div>
                <div className="input-content">
                  <label htmlFor="type">Visibilidade</label>
                  <div className="input-block">
                    <select
                      name="type"
                      id="type"
                      value={product.type}
                      onChange={e =>
                        setProduct({
                          ...product,
                          type: e.target.value,
                        })
                      }
                    >
                      <option value={0}>Selecione</option>
                      <option value="vendas">Meta de vendas</option>
                      <option value="clientes">Prospecção de clientes</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <TextArea
                  name="value"
                  label="Descrição"
                  type="text"
                  value={product.short_description}
                  onChange={e =>
                    setProduct({
                      ...product,
                      short_description: e.target.value,
                    })
                  }
                />
              </div>

              <div className="row-4-1fr">
                <Input
                  name="value"
                  label="SKU"
                  type="text"
                  value={product.name}
                  onChange={e =>
                    setProduct({
                      ...product,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  name="value"
                  label="Preço"
                  type="text"
                  value={product.name}
                  onChange={e =>
                    setProduct({
                      ...product,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  name="value"
                  label="Preço Regular"
                  type="text"
                  value={product.name}
                  onChange={e =>
                    setProduct({
                      ...product,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  name="value"
                  label="Preço de Venda"
                  type="text"
                  value={product.name}
                  onChange={e =>
                    setProduct({
                      ...product,
                      name: e.target.value,
                    })
                  }
                />
              </div>
            </section>
            <footer>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setToggleModal(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={() => setToggleModal(true)}
              >
                Salvar
              </button>
            </footer>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default ProductView;
