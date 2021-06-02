import React, { useEffect, useState } from 'react';

import { FaBuffer, FaBalanceScaleLeft, FaUsers, FaPlus } from 'react-icons/fa';

import Card from '~/components/Card';
import Activity from '~/components/Activity';
import Mark from '~/components/Mark';

import './styles.css';

import api from '~/services/api';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywic3RvcmVfaWQiOjEsImlhdCI6MTYyMjU4MTU0MywiZXhwIjoxNjIzMTg2MzQzfQ.-qIpTNmP9HeEjJ1JTe3zE7R7b6MQPMVYpTpwUR34sgQ';

function Home() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    api
      .get('scaffold?page=1', {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        setResponse(res.data);
      });
  });

  return (
    <div className="main-container">
      <section className="card-section">
        <Card
          total="R$ 22.459,19"
          title="Total de vendas"
          background="rgb(52, 141, 80, 0.1)"
          color="rgb(52, 141, 80)"
          icon={<FaBalanceScaleLeft size={45} color="green" />}
        />
        <Card
          total="50"
          title="Novos clientes"
          background="rgb(243, 121, 32, 0.1)"
          color="rgb(243, 121, 32)"
          icon={<FaUsers size={45} color="rgb(243, 121, 32)" />}
        />
        <Card
          total={
            response.openActivities?.count === null
              ? 0
              : response.openActivities?.count
          }
          title="Atividades em aberto"
          background="rgb(0, 53, 246, 0.1)"
          color="rgb(0, 53, 246)"
          icon={<FaBuffer size={45} color="rgb(0, 53, 246)" />}
        />
        <Card
          total="3"
          title="Atividades atrasadas"
          background="rgb(237, 28, 36, 0.1)"
          color="rgb(237, 28, 36)"
          icon={<FaBuffer size={45} color="rgb(237, 28, 36)" />}
        />
        <Card
          total={
            response.finishedActivities?.count === null
              ? 0
              : response.finishedActivities?.count
          }
          title="Atividades concluídas"
          background="rgb(153, 217, 234, 0.1)"
          color="rgb(70, 187, 217)"
          icon={<FaBuffer size={45} color="rgb(70, 187, 217)" />}
        />
      </section>
      <main>
        <div className="content">
          <header>
            <h4>Metas</h4>
          </header>
          <main>
            <Mark marks={response.targets} />
          </main>
        </div>
        <div className="content">
          <header>
            <h4>Atividades</h4>
            <button type="button" className="btn-primary">
              <FaPlus size={10} /> Atividade
            </button>
          </header>
          <main>
            <Activity activities={response.activities} />
          </main>
        </div>
      </main>
    </div>
  );
}

export default Home;
