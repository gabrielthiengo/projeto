import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Card({ total, title, icon }) {
  return (
    <div className="card">
      <div className="card-header">{icon}</div>
      <main>
        <h4>{title}</h4>
        <h3>{total}</h3>
      </main>
    </div>
  );
}

export default Card;

Card.propTypes = {
  total: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element]).isRequired,
};
