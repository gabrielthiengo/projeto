/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import { Select, MenuItem } from '@material-ui/core/';
import { toast } from 'react-toastify';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaBarcode,
} from 'react-icons/fa';
import Loader from 'react-loader-spinner';
import { addProductToCart } from '../../store/modules/cart/actions';
import Navbar from '~/components/Navbar';
import Product from '~/components/Product';

import api from '~/services/api';

import './styles.css';

function ProductShow() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [imageState, setImageState] = useState('');
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    async function loadProduct() {
      setIsLoading(true);
      const response = await api.get(`product-show/${id}`);
      setProduct(response.data.product);
      setProductList(response.data.product_list.data);

      if (imageState === '') {
        setImageState(response.data.product.photo_cover);
      }
      setIsLoading(false);
    }

    loadProduct();
  }, []);

  const handleChangeSize = event => {
    setSize(event.target.value);
  };

  const handleChangeColor = event => {
    setColor(event.target.value);
  };

  function handleAddProductToCart() {
    if (product?.size !== null) {
      if (size === '') {
        toast.error('Informe um tamanho');
      } else if (color === '') {
        toast.error('Informe uma cor');
      } else {
        dispatch(addProductToCart(product, 1, size, color));
      }
    }
  }

  return (
    <div className="wrapper-container">
      <Navbar />

      {!isLoading ? (
        <main className="product-main w3-animate-opacity">
          <section className="product-section">
            <header className="ps-header">
              <h1>{product.title}</h1>
            </header>
            <div className="ps-content">
              <div className="image-container">
                <img src={imageState} alt="Foto Produto" />
                <div className="image-list">
                  <img
                    src={product.photo_cover}
                    onClick={() => setImageState(product.photo_cover)}
                    alt="Foto Produto"
                  />
                  <img
                    src={product.photo_one}
                    onClick={() => setImageState(product.photo_one)}
                    alt="Foto Produto"
                  />
                  <img
                    src={product.photo_two}
                    onClick={() => setImageState(product.photo_two)}
                    alt="Foto Produto"
                  />
                  <img
                    src={product.photo_three}
                    onClick={() => setImageState(product.photo_three)}
                    alt="Foto Produto"
                  />
                </div>
              </div>

              <div className="ps-detail">
                <h2>Descrição:</h2>
                <p>{product.full_description}</p>

                <h2>Tamanho:</h2>
                <Select value={size} onChange={handleChangeSize}>
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="G">G</MenuItem>
                  <MenuItem value="GG">GG</MenuItem>
                </Select>

                <h2>Cores:</h2>
                <Select value={color} onChange={handleChangeColor}>
                  <MenuItem value="PRETO">PRETO</MenuItem>
                  <MenuItem value="BRANCO">BRANCO</MenuItem>
                  <MenuItem value="VERMELHO">VERMELHO</MenuItem>
                  <MenuItem value="AMARELO">AMARELO</MenuItem>
                </Select>

                <h4>R$ {product.price?.toFixed(2)}</h4>

                <Button type="button" onClick={handleAddProductToCart}>
                  Adicionar ao Carrinho
                </Button>

                <div className="address-info">
                  <input type="text" placeholder="Cep" />
                  <Button type="button">Calcular</Button>
                </div>
              </div>
            </div>
          </section>

          <section className="other-products">
            <div className="css-line" />
            <br />
            <h3>Recomendados para você</h3>

            <div className="other-list">
              {productList.map(productItem => {
                return <Product key={productItem.id} product={productItem} />;
              })}
            </div>
            <p>
              *As imagens dos produtos poderão sofrer ligeiras alterações de
              cores, devido as configurações de seu monitor. Objetos utilizados
              para ilustração não acompanham o produto.
            </p>
          </section>
          <section className="payments-type">
            <div className="payments">
              <h3>FORMAS DE PAGAMENTO</h3>
              <div className="types">
                <FaCcVisa size={30} />
                <FaCcMastercard size={30} />
                <FaCcPaypal size={30} />
                <FaBarcode size={30} />
              </div>
            </div>
            <div className="devstore-logo">
              <h1>DEVSTORE</h1>
            </div>
          </section>
        </main>
      ) : (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Loader
            type="Oval"
            color="rgb(147, 130, 215)"
            height={50}
            width={100}
          />
        </>
      )}
    </div>
  );
}

export default ProductShow;
