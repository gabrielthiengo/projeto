import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import { FaTags, FaBook, FaMusic, FaAward, FaSync } from 'react-icons/fa';

import Input from '~/components/Input';
import Background from '~/components/Background';
import Navbar from '~/components/Navbar';
import Product from '~/components/Product';
import Footer from '~/components/Footer';
import Card from '~/components/Card';

import './styles.css';

function Home() {
  const formRef = useRef();
  return (
    <div className="wrapper-container">
      <Navbar />
      <Background />

      <div className="header-detail">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="home-container">
        <div className="home-header">
          <Card title="Roupa" description="PageMaker including versions">
            <FaTags size={60} color="rgb(255, 100, 106)" />
          </Card>
          <Card title="Livro" description="PageMaker including versions">
            <FaBook size={60} color="#969ed2" />
          </Card>
          <Card title="Música" description="PageMaker including versions">
            <FaMusic size={60} color="#db1414" />
          </Card>
          <Card title="Acessório" description="PageMaker including versions">
            <FaAward size={60} color="#ec7646" />
          </Card>
          <Card title="Outros" description="PageMaker including versions">
            <FaSync size={60} color="rgb(7, 56, 104)" />
          </Card>
        </div>
        <div className="home-content">
          <div className="filter">
            <h4>Filtrar por:</h4>
            <div className="filter-wrapper">
              <Form ref={formRef}>
                <Input label="Produto:" name="product" autoComplete="off" />
                <Input label="Categoria:" name="category" autoComplete="off" />
                <Input label="Preço mínimo:" name="min" autoComplete="off" />
                <Input
                  label="Preço máximo:"
                  name="product"
                  autoComplete="off"
                />
              </Form>
            </div>
          </div>
          <div className="list-products">
            <Link to="/product">
              <Product
                title="Camisa Croácia"
                image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
                price="R$ 149,90"
                store="Netshoes"
              />
            </Link>
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
            <Product
              title="Camisa Croácia"
              image="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
              price="R$ 149,90"
              store="Netshoes"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
