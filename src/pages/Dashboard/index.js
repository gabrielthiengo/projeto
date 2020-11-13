/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { FaPencilRuler, FaArchive, FaWallet, FaRedoAlt } from 'react-icons/fa';

import Card from '~/components/Card';
import ListJobs from '~/components/ListJobs';
import Loading from '~/components/Loading';

import './styles.css';

import api from '~/services/api';
import { store } from '~/store';

function Dashboard() {
  const [wallet, setWallet] = useState(0);
  const [works, setWorks] = useState(null);
  const [totalWorks, setTotalWorks] = useState('0');
  const [totalRequests, setTotalRequests] = useState('0');
  const [totalWithdrawal, setTotalWithdrawal] = useState('0');
  const [requests, setRequests] = useState(null);
  const { token } = store.getState().auth.token;

  useEffect(() => {
    api
      .get('wallet', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setWallet(res.data.amount);
      });

    api
      .get('myworks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setTotalWorks(res.data.total);
        setTotalWithdrawal(res.data.totalWithdrawals);
        res.data.works.length === 0 ? setWorks(null) : setWorks(res.data.works);
      });

    api
      .get('requests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setTotalRequests(res.data.total);
        res.data.requests.length === 0
          ? setRequests(null)
          : setRequests(res.data.requests);
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
            title={`R$ ${wallet.toFixed(2)}`}
            description="Carteira"
            icon={<FaWallet size={25} color="green" />}
          />
          <Card
            title={totalWorks}
            description="Seus Trabalhos"
            icon={<FaArchive size={25} color="orange" />}
          />
          <Card
            title={totalRequests}
            description="Suas Tarefas"
            icon={<FaPencilRuler size={25} color="#7159c1" />}
          />
          <Card
            title={totalWithdrawal}
            description="Retiradas"
            icon={<FaRedoAlt size={25} color="#008080" />}
          />
        </div>
      </header>

      <main className="dashboard-main">
        <ListJobs title="Suas Tarefas em Aberto" data={requests}>
          <FaPencilRuler size={18} color="#7159c1" />
        </ListJobs>
        <ListJobs title="Seus Trabalhos em Aberto" data={works}>
          <FaArchive size={18} color="#fab005" />
        </ListJobs>
      </main>

    </div>
  );
}

export default Dashboard;
