import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Card({ title, description, children }) {
  return (
    <div className="card-container">
      {children}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

Card.defaultProps = {
  children: null,
};
