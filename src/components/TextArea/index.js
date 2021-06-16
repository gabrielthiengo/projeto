import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import './styles.css';

const Input = ({ name, label, ...rest }) => {
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

  return (
    <div className="input-content">
      <div className="input-block">
        <label htmlFor={fieldName}>{label}</label>
        <textarea
          rows="5"
          style={error && { border: '1px solid red' }}
          ref={inputRef}
          defaultValue={defaultValue}
          id={name}
          {...rest}
        />
      </div>
      {error && (
        <span
          style={{
            width: '100%',
            fontSize: '10px',
            color: 'red',
            fontFamily: 'Poppins',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
