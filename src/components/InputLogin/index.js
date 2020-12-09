import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import './styles.css';

const InputLogin = ({ name, label, icon, id, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldName, registerField]);

  function addClass() {
    const input = document.getElementById(id);
    input.classList.add('focus');
  }

  function removeClass() {
    const input = document.getElementById(id);

    const element = document.getElementById(id);
    const child = element.children[1];
    const inputs = child.children[1];

    const { value } = inputs;

    if (value.length === 0) {
      input.classList.remove('focus');
    }
  }

  return (
    <>
      <div
        className="input-div one"
        id={id}
        style={error && { borderBottom: '2px solid rgb(247, 113, 113)' }}
      >
        <div className="i" style={error && { color: 'rgb(247, 113, 113)' }}>
          {icon}
        </div>
        <div>
          <h5>{label}</h5>
          <input
            type="text"
            className="input"
            autoComplete="off"
            onFocus={addClass}
            onBlur={removeClass}
            ref={inputRef}
            defaultValue={defaultValue}
            id={name}
            {...rest}
          />
        </div>
        {error && <span className="error">{error}</span>}
      </div>
    </>
  );
};

export default InputLogin;

InputLogin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
