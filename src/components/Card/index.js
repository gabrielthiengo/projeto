/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Card({ title, description, icon }) {
  return (
    <div className="card-main">
      <div className="card-content">
        {icon}
        <div className="card-items">
          <div className="card-activities">
            {title}
            <label>{description}</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

Card.defaultProps = {
  description: '',
};
