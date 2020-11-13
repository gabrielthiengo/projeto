/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FaExclamationTriangle } from 'react-icons/fa';

import { store } from '~/store';
import api from '~/services/api';

import './styles.css';

function WorkDetail(props) {
  const { id } = props.match.params;
  const { token } = store.getState().auth.token;
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(`works/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setWork(res.data);
      });
      setLoading(false);
  });

  return (
    <>
      {work !== null ? (
        <div>
          {work.map(workItem => {
            return (
              <div className="work-container">
                <header className="work-header">
                  <h3>{workItem.title}</h3>
                  <h3>{`R$ ${workItem.value}`}</h3>
                </header>

                <main className="work-main">
                  <div className="sub-header">
                    <div className="header-container">
                      Publicado: 07/11/2020
                    </div>
                    <div className="header-container">Categoria: Trabalho</div>
                    <div className="header-container">
                      Pagamento: {workItem.type}
                    </div>
                    <div className="header-container">
                      Status: {workItem.status}
                    </div>
                  </div>

                  <div className="work-description">
                    <h4>Descrição:</h4>
                    <h5 style={{ textAlign: 'justify', fontSize: '1.5rem' }}>
                      {workItem.description}
                    </h5>
                  </div>
                  <div className="work-detail">
                    <div className="work-user">
                      <div className="works-avatar">
                        {workItem.avatar !== null ? (
                          <img
                            src={workItem.avatar}
                            alt="Avatar"
                            className="avatar"
                          />
                        ) : (
                          <div className="avatar" />
                        )}
                      </div>
                      <div>
                        <h5>
                          <strong>Nome:</strong> {workItem.name}
                        </h5>
                        <h5>
                          <strong>Tel:</strong> {workItem.phone}
                        </h5>
                      </div>
                    </div>

                    <div className="work-info">
                      <h5>
                        <strong>Data de Entrega:</strong> 29/11/2020
                      </h5>
                      <h5>
                        <strong>Pagamento:</strong> Transferência
                      </h5>
                    </div>
                    <div className="work-button">
                      <input
                        type="submit"
                        className="btn"
                        value={loading ? 'Carregando...' : 'Pegar Trabalho'}
                      />
                    </div>
                  </div>
                </main>
              </div>
            );
          })}
          {!loading ? null : <Loading />}
        </div>
      ) : (
        <div className="empty-data">
          <FaExclamationTriangle size={40} color="#adb5bd" />
          <h3>Opss... Houve um erro por aqui! Tente novamente mais tarde.</h3>
        </div>
      )}
    </>
  );
}

export default WorkDetail;

WorkDetail.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

WorkDetail.defaultProps = {
  props: null,
};
