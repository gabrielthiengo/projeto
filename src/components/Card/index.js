import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Card({ total, title, icon, background, color }) {
  return (
    <div className="card" style={{ background }}>
      <div className="card-header">{icon}</div>
      <main>
        <h4>{title}</h4>
        <h3 style={{ color }}>{total}</h3>
      </main>
    </div>
  );
}

export default Card;

Card.propTypes = {
  total: PropTypes.string,
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element]).isRequired,
};

Card.defaultProps = {
  total: '0',
};
