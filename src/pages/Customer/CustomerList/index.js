/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';
import { Pagination } from '@material-ui/lab/';
import { FaUserEdit, FaUsers, FaExclamationTriangle } from 'react-icons/fa';

import maleAvatar from '~/assets/images/logos/male_avatar.png';
import femaleAvatar from '~/assets/images/logos/female_avatar.png';
import Loading from '~/components/Loading';
import './styles.css';

import api from '~/services/api';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`customers?page=${currPage}&search=${search}`)
      .then(response => {
        setCustomers(response.data);
        setIsSubmit(false);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage, isSubmit]);

  function handleChangePage(event, value) {
    setCurrPage(value);
  }

  return (
    <div className="customer-container">
      <header>
        <div>
          <FaUsers size={25} color="#F14723" />
          <p>CLIENTES</p>
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
                <th>ID</th>
                <th>AVATAR</th>
                <th>NOME</th>
                <th>DADOS</th>
                <th>ANIVERSÁRIO</th>
              </tr>
            </thead>
            <tbody>
              {customers.customers?.length !== 0 ? (
                customers.customers?.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td
                        id="actions"
                        style={{ textAlign: 'center', width: '50px' }}
                      >
                        <Link to={`/cliente/info/${customer.id}/cliente`}>
                          <FaUserEdit size={20} />
                        </Link>
                      </td>
                      <td>#00{customer.id}</td>
                      <td style={{ width: '70px' }}>
                        <img
                          src={
                            customer.avatar !== null
                              ? customer.avatar
                              : customer.sex === 'M'
                              ? maleAvatar
                              : femaleAvatar
                          }
                          alt="avatar"
                        />
                      </td>
                      <td>{customer.name}</td>
                      <td>
                        <p>{customer.email}</p>
                        <p>{customer.cellphone}</p>
                        <p>{customer.phone}</p>
                      </td>
                      <td>{moment(customer.birthdate).format('DD/MM/YYYY')}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>
                    <div style={{ width: '100%' }} className="is-empty">
                      <FaExclamationTriangle size={30} />
                      <h4>Nenhum cliente a ser exibido</h4>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="pagination">
            <Pagination
              count={customers.total}
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

export default Customers;
