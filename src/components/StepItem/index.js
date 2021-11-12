/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function StepItem({ title, subTitle, icon, isCheck, isPast, stepNumber }) {
  return (
    <div className="stepItem-content">
      <div className="title">
        <h3
          style={{
            color: `${isPast ? '#4d4d57' : isCheck ? '#e1e1e6' : ''}`,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: `${isPast ? '#4d4d57' : isCheck ? '#c0c0c2' : ''}`,
          }}
        >
          {subTitle}
        </p>
      </div>

      <div className="check">
        <div
          style={{
            color: `${isPast ? '#04d361' : isCheck ? '#c0c0c2' : ''}`,
            borderColor: `${isPast ? '#04d361' : isCheck ? '#c0c0c2' : ''}`,
          }}
        >
          {isPast ? icon : <span>{stepNumber}</span>}
        </div>
      </div>
    </div>
  );
}

export default StepItem;

StepItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isCheck: PropTypes.bool.isRequired,
  isPast: PropTypes.bool.isRequired,
  stepNumber: PropTypes.number.isRequired,
};
