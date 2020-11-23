import React from 'react';

import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Footer from '~/components/Footer';
import Product from '~/components/Product';
import Navbar from '~/components/Navbar';
import Background from '~/components/Background';
import Size from '~/components/Size';

import './styles.css';

function ProductShow() {
  return (
    <div className="wrapper-container">
      <Navbar />
      <Background />

      <div className="products-content">
        <div className="products-image">
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/949367OX/camisa-selecao-da-croacia-ii-20-21-nike-masculina-img.jpg"
            alt="Camisa"
          />

          <div className="products-detail">
            <h2>Camisa da Croácia</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <h4>R$ 149,90</h4>

            <h5>Tamanhos:</h5>
            <Size />
            <br />
            <h5>Reputação do Vendedor:</h5>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>

            <Button style={{ fontSize: '1.4rem' }}>
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </div>
      <div className="other-products">
        <h4>Produtos que possam te interessar:</h4>
        <div className="list-products">
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
      <Footer
        store="Lojas Americanas"
        facebook="americanasLoja"
        instagram="@lojasamericanas"
        youtube="youtube.com/lojasamericanas"
        whatsapp="(31) 9 8877-4455"
        address="Rua das Oliveiras, 754, Bocaiúba-SP"
      />
    </div>
  );
}

export default ProductShow;
