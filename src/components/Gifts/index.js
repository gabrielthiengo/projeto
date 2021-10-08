import React, { useState } from 'react';

import { FaCartPlus } from 'react-icons/fa';

import './styles.css';

function Gifts() {
  const [products, setProducts] = useState([
    {
      title: 'Máquina de lavar',
      value: 1250.0,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Cafeteira',
      value: 320.0,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Televisão',
      value: 1599.9,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Micro-ondas',
      value: 499.0,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Geladeira',
      value: 2389.9,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Máquina de lavar',
      value: 1250.0,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Cafeteira',
      value: 320.0,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Televisão',
      value: 1599.9,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Micro-ondas',
      value: 499.0,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Geladeira',
      value: 2389.9,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Máquina de lavar',
      value: 1250.0,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Cafeteira',
      value: 320.0,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Televisão',
      value: 1599.9,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Micro-ondas',
      value: 499.0,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
    {
      title: 'Geladeira',
      value: 2389.9,
      img:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4VlIU1zebDQN_9ey-8sHmHBF-xnJMf0h2KtAWvctTGF1WwapVfbX__iE2b4admFVJ1nBvEmH5ByJH&usqp=CAc',
    },
  ]);

  return (
    <div id="gifts" className="gift-container">
      <h2>Presentes</h2>

      <p>
        Aenean tristique eros eget facilisis pretium. Maecenas risus leo,
        maximus nec faucibus vitae, varius non elit. Nunc eget nibh eget felis
        tristique pretium. Duis sed condimentum neque.
      </p>

      <div>
        {products.map(product => {
          return (
            <div key={product.title} className="product-container">
              <img src={product.img} alt="" />

              <h3>{product.title}</h3>
              <span>
                {product.value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
              <p>
                ou{' '}
                <strong>
                  6x de{' '}
                  {(product.value / 6).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>
              </p>
              <br />

              <button type="button">
                <FaCartPlus /> Comprar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gifts;
