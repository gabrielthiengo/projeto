/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { FaPencilRuler, FaArchive, FaWallet, FaRedoAlt } from 'react-icons/fa';

import Card from '~/components/Card';
import ListJobs from '~/components/ListJobs';
import './styles.css';

import api from '~/services/api';
import { store } from '~/store';

function Dashboard() {
  const [response, setResponse] = useState(null);
  const { token } = store.getState().auth.token;

  useEffect(() => {
    api
      .get('home', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setResponse(res.data);
      });
  });

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <label className="header-title">Bem Vindo(a) de volta.</label>
        <label className="header-message">
          Esperamos que tenha uma ótima experiência!
        </label>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card
            title={`R$ ${
              response !== null ? response.wallet.amount.toFixed(2) : 0
            }`}
            description="Carteira"
            icon={<FaWallet size={25} color="green" />}
          />
          <Card
            title={response !== null ? response.totalWorks : '0'}
            description="Seus Trabalhos"
            icon={<FaArchive size={25} color="orange" />}
          />
          <Card
            title={response !== null ? response.totalRequests : '0'}
            description="Suas Tarefas"
            icon={<FaPencilRuler size={25} color="#7159c1" />}
          />
          <Card
            title={response !== null ? response.totalWithdrawals : '0'}
            description="Retiradas"
            icon={<FaRedoAlt size={25} color="#008080" />}
          />
        </div>
      </header>

      <main className="dashboard-main">
        <ListJobs
          title="Suas Tarefas em Aberto"
          data={response !== null ? response.requests : null}
        >
          <FaPencilRuler size={18} color="#7159c1" />
        </ListJobs>
        <ListJobs
          title="Seus Trabalhos em Aberto"
          data={response !== null ? response.myWorks : null}
        >
          <FaArchive size={18} color="#fab005" />
        </ListJobs>
      </main>
    </div>
  );
}

export default Dashboard;
