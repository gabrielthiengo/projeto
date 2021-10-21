/* eslint-disable no-plusplus */
import React from 'react';

import wedding from '~/assets/images/svg/wedding.svg';

import './styles.css';

function Loading() {
  return (
    <div className="loading-container">
      <div className="tracking-in-expand">
        <img id="wedding" src={wedding} alt="wedding" />
      </div>

      <div className="loading-text">
        <h4 className="text-focus-in">
          Estamos preparando tudo, aguarde um instante
        </h4>
        <span className="bounce-in-top">.</span>
        <span className="bounce-in-top-02">.</span>
        <span className="bounce-in-top-03">.</span>
      </div>
    </div>
  );
}

export default Loading;
