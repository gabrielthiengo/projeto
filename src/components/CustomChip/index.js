import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function CustomChip({ text, color, background }) {
  return (
    <div
      style={{ background: `rgb(${background})` }}
      className="chip-container"
    >
      <p style={{ fontWeight: 'bold', color }}>{text}</p>
    </div>
  );
}

export default CustomChip;

CustomChip.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
