/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import moment from 'moment';

import {
  FaTasks,
  FaShoppingBasket,
  FaShoppingCart,
  FaStarHalfAlt,
} from 'react-icons/fa';

import Loading from '~/components/Loading';

import './styles.css';

import api from '~/services/api';

function Indicators() {
  const [indicator, setIndicator] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currFilter, setCurrFilter] = useState(4);
  const [orderCustomers, setOrderCustomers] = useState({});
  const [filterDate, setFilterDate] = useState({
    from: moment(new Date()).startOf('month'),
    to: moment(new Date()).endOf('month'),
  });

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`indicators?from=${filterDate.from}&to=${filterDate.to}`)
      .then(res => {
        setIndicator(res.data);

        const orders = {
          labels: [],
          data: [],
        };

        res.data.customersWithOrders.map(order => {
          orders.labels.push(order.customer.name);
          orders.data.push(order.count);
          setOrderCustomers(orders);
        });
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [filterDate]);

  function handleChangeDate(from, to) {
    setFilterDate({
      from,
      to,
    });
  }

  return (
    <div className="indicator-container">
      <header>
        <div className="temporal-filter">
          <strong>FILTROS</strong>
          <p
            style={{ color: `${currFilter === 1 ? '#F14723' : '#333'}` }}
            onClick={() => {
              handleChangeDate(
                moment(new Date()).add(-1, 'days'),
                moment(new Date()).add(1, 'days')
              );
              setCurrFilter(1);
            }}
          >
            HOJE
          </p>
          <p
            style={{ color: `${currFilter === 2 ? '#F14723' : '#333'}` }}
            onClick={() => {
              handleChangeDate(
                moment(new Date()).startOf('week'),
                moment(new Date()).endOf('week')
              );
              setCurrFilter(2);
            }}
          >
            SEMANA ATUAL
          </p>
          <p
            style={{ color: `${currFilter === 3 ? '#F14723' : '#333'}` }}
            onClick={() => {
              handleChangeDate(
                moment(new Date())
                  .subtract(1, 'weeks')
                  .startOf('week')
                  .format('YYYY-MM-DD'),
                moment(new Date())
                  .subtract(1, 'weeks')
                  .endOf('week')
                  .format('YYYY-MM-DD')
              );
              setCurrFilter(3);
            }}
          >
            SEMANA ANTERIOR
          </p>
          <p
            style={{ color: `${currFilter === 4 ? '#F14723' : '#333'}` }}
            onClick={() => {
              handleChangeDate(
                moment(new Date()).startOf('month'),
                moment(new Date()).endOf('month')
              );
              setCurrFilter(4);
            }}
          >
            MÊS ATUAL
          </p>
          <p
            style={{ color: `${currFilter === 5 ? '#F14723' : '#333'}` }}
            onClick={() => {
              handleChangeDate(
                moment(new Date())
                  .subtract(1, 'month')
                  .startOf('month')
                  .format('YYYY-MM-DD'),
                moment(new Date())
                  .subtract(1, 'month')
                  .endOf('month')
                  .format('YYYY-MM-DD')
              );
              setCurrFilter(5);
            }}
          >
            MÊS ANTERIOR
          </p>
          <p
            style={{ color: `${currFilter === 6 ? '#F14723' : '#333'}` }}
            onClick={() => {
              handleChangeDate(
                moment(new Date()).startOf('year'),
                moment(new Date()).endOf('year')
              );
              setCurrFilter(6);
            }}
          >
            ANO ATUAL
          </p>
          <p
            style={{ color: `${currFilter === 7 ? '#F14723' : '#333'}` }}
            onClick={() => {
              handleChangeDate(
                moment(new Date())
                  .subtract(1, 'year')
                  .startOf('year')
                  .format('YYYY-MM-DD'),
                moment(new Date())
                  .subtract(1, 'year')
                  .endOf('year')
                  .format('YYYY-MM-DD')
              );
              setCurrFilter(7);
            }}
          >
            ANO ANTERIOR
          </p>
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
                  labels: indicator?.userActivities?.labels,
                  datasets: [
                    {
                      label: 'TOTAL',
                      data: indicator?.userActivities?.data,
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
                labels: indicator?.salesProducts?.labels,
                datasets: [
                  {
                    label: 'TOTAL',
                    data: indicator?.salesProducts?.data,
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
                labels: orderCustomers?.labels,
                datasets: [
                  {
                    label: 'TOTAL',
                    data: orderCustomers?.data,
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
                labels: indicator?.ratingProduct?.labels,
                datasets: [
                  {
                    label: 'TOTAL',
                    data: indicator?.ratingProduct?.data,
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

      {isLoading && <Loading />}
    </div>
  );
}

export default Indicators;
