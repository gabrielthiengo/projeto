import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';

import { FaCalendarCheck, FaCloudSun } from 'react-icons/fa';

import './styles.css';

function Dayoff({ address, schedule, date }) {
  const weddingDay = moment(date);

  return (
    <div id="dayoff" className="dayoff-container">
      <h2>O Grande Dia</h2>
      <p>
        Nada é tão forte como esta cumplicidade que define nosso amor como algo
        belo e eterno. Confira abaixo os detalhes sobre o nosso grade dia.
      </p>
      <div>
        <div className="dayoff-details">
          <FaCalendarCheck size={70} color="#d1af83" />
          <h3>Detalhes do Evento</h3>
          <p>
            <strong>Data:</strong> {weddingDay.locale('pt-br').format('LL')}
          </p>
          <p>
            <strong>Hora:</strong> {schedule}
          </p>
          <p>
            <strong>Local:</strong> {address}
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

Dayoff.propTypes = {
  address: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
