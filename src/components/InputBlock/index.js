import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function InputBlock({ children }) {
  return <div className="input-block">{children}</div>;
}

export default InputBlock;

InputBlock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element]).isRequired,
};
