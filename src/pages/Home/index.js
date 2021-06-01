import React from 'react';

import { FaBuffer, FaBalanceScaleLeft, FaUsers } from 'react-icons/fa';
import Card from '~/components/Card';

import './styles.css';

function Home() {
  return (
    <div className="main-container">
      <section className="card-section">
        <Card
          total="R$ 19.643,00"
          title="Total de vendas"
          icon={<FaBalanceScaleLeft size={45} color="green" />}
        />
        <Card
          total="50"
          title="Novos clientes"
          icon={<FaUsers size={45} color="orange" />}
        />
        <Card
          total="10"
          title="Tarefas em aberto"
          icon={<FaBuffer size={45} color="blue" />}
        />
        <Card
          total="3"
          title="Tarefas atrasadas"
          icon={<FaBuffer size={45} color="gray" />}
        />
        <Card
          total="7"
          title="Tarefas concluídas"
          icon={<FaBuffer size={45} color="red" />}
        />
      </section>
      <main>
        <div className="left-content">esquerda</div>
        <div className="right-content">direita</div>
      </main>
    </div>
  );
}

export default Home;
