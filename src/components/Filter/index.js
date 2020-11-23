/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { Form } from '@unform/web';

import { FaFilter } from 'react-icons/fa';
import Input from '~/components/Input';

import './styles.css';

function Filter() {
  const formRef = useRef(null);

  function handleFilter() {}

  return (
    <div className="filter-container">
      <div className="filter-title">
        <FaFilter id="filter" />
        <h3>Filtros</h3>
      </div>

      <div className="filter-content">
        <Form ref={formRef} onSubmit={handleFilter}>
          <Input
            id="name"
            label="Nome:"
            name="name"
            autoComplete="off"
            placeHolder="Ex: Camisa"
          />
          <Input
            id="category"
            label="Categoria:"
            name="category"
            autoComplete="off"
            placeHolder="Ex: Livros"
          />
          <Input
            id="store"
            label="Loja:"
            name="store"
            autoComplete="off"
            placeHolder="Ex: Lojas XPTO"
          />

          <h4>Preço:</h4>
          <h5>Até R$100,00</h5>
          <h5>R$100,00 a R$300,00</h5>
          <h5>Mais de R$300,00</h5>

          <div className="price">
            <Input
              id="min"
              label=""
              name="min"
              autoComplete="off"
              placeHolder="Mínimo"
            />
            <Input
              id="max"
              label=""
              name="max"
              autoComplete="off"
              placeHolder="Máximo"
            />
          </div>

          <div className="filter-footer">
            <button className="btn-clear" type="button">
              Limpar
            </button>
            <button className="btn-search" type="submit">
              Buscar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Filter;
