import React from 'react';

import { FaCalendarCheck, FaCloudSun } from 'react-icons/fa';

import './styles.css';

function Dayoff() {
  return (
    <div id="dayoff" className="dayoff-container">
      <h2>O Grande Dia</h2>
      <p>
        Aenean tristique eros eget facilisis pretium. Maecenas risus leo,
        maximus nec faucibus vitae, varius non elit. Nunc eget nibh eget felis
        tristique pretium. Duis sed condimentum neque.
      </p>
      <div>
        <div className="dayoff-details">
          <FaCalendarCheck size={70} color="#d1af83" />
          <h3>Detalhes do Evento</h3>
          <p>
            <strong>Data:</strong> 16 de Abril de 2022
          </p>
          <p>
            <strong>Hora:</strong> 16hrs
          </p>
          <p>
            <strong>Local:</strong> Rua Esmeraldas, 113 - Pedra Azul, Contagem -
            MG
          </p>
        </div>
        <div className="dayoff-details">
          <FaCloudSun size={70} color="#d1af83" />
          <h3>Previsão do Tempo</h3>
          <p>
            <strong>Temperatura:</strong> 29 °C
          </p>
          <p>
            <strong>Chuva:</strong> 0%
          </p>
          <p>
            <strong>Humidade:</strong> 68%
          </p>
          <p>
            <strong>Vento:</strong> 25 Km/h
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dayoff;
