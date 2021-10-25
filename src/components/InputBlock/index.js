import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function InputBlock({ label, children, required }) {
  return (
    <div className="input-block">
      <span>
        {label} {required && <strong>*</strong>}{' '}
      </span>
      {children}
    </div>
  );
}

export default InputBlock;

InputBlock.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element]).isRequired,
  required: PropTypes.bool.isRequired,
};
