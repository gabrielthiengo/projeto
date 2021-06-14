import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  FaTasks,
  FaShoppingBasket,
  FaShoppingCart,
  FaStarHalfAlt,
} from 'react-icons/fa';

import './styles.css';

import api from '~/services/api';

function Indicators() {
  useEffect(() => {
    api.get('indicators').then(res => {});
  }, []);

  return (
    <div className="indicator-container">
      <header>
        <div className="temporal-filter">
          <strong>FILTROS</strong>
          <p>HOJE</p>
          <p>SEMANA ATUAL</p>
          <p>SEMANA ANTERIOR</p>
          <p>MÊS ATUAL</p>
          <p>MÊS ANTERIOR</p>
          <p>ANO ANTERIOR</p>
          <p>ANO ANTERIOR</p>
        </div>
      </header>
      <main>
        <div className="card">
          <header>
            <FaTasks size={18} /> <span>ATIVIDADES X USUÁRIO</span>
          </header>
          <main>
            <div className="chart">
              <Bar
                height={400}
                width={550}
                data={{
                  labels: [
                    'Gabriel Thiengo',
                    'Mariana Braga',
                    'Samuel Venancio',
                  ],
                  datasets: [
                    {
                      label: '',
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </main>
        </div>
        <div className="card">
          <header>
            <FaShoppingBasket size={18} /> <span>VENDAS X PRODUTO</span>
          </header>
          <main>
            <Bar
              height={400}
              width={550}
              data={{
                labels: [
                  'Calça Pantacourt',
                  'Regata Básica',
                  'Vestido Longo',
                  'Calça Pantacourt',
                  'Regata Básica',
                  'Vestido Longo',
                ],
                datasets: [
                  {
                    label: '',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </main>
        </div>
        <div className="card">
          <header>
            <FaShoppingCart size={18} /> <span>COMPRAS X CLIENTES</span>
          </header>
          <main>
            {' '}
            <Bar
              height={400}
              width={550}
              data={{
                labels: [
                  'Robério',
                  'Sabrina Satto',
                  'Amanda Porto',
                  'Samuela Cristina',
                  'Joana Dark',
                  'Cabrita Tevez',
                  'Robério',
                  'Sabrina Satto',
                  'Amanda Porto',
                ],
                datasets: [
                  {
                    label: '',
                    data: [12, 19, 3, 5, 2, 3, 7, 2, 5],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </main>
        </div>
        <div className="card">
          <header>
            <FaStarHalfAlt size={18} /> <span>PRODUTOS X AVALIAÇÕES</span>
          </header>
          <main>
            <Bar
              height={400}
              width={550}
              data={{
                labels: [
                  'Calça Pantacourt',
                  'Regata Básica',
                  'Vestido Longo',
                  'Calça Pantacourt',
                  'Regata Básica',
                  'Vestido Longo',
                ],
                datasets: [
                  {
                    label: '',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </main>
        </div>
      </main>
    </div>
  );
}

export default Indicators;
