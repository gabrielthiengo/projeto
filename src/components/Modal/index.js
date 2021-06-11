import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Modal({ title, children }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <header>
          <h4>{title}</h4>
        </header>
        <section>{children}</section>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
