import React from 'react';

import './styles.css';

function Intro() {
  return (
    <div id="intro" className="intro-container">
      <div>
        <h2 className="tracking-in-expand">Gabriel & Mariana</h2>
        <h4 className="slide-top">Estão se casando</h4>
        <button
          className="slide-top"
          type="button"
          onClick={() => {
            const div = document.getElementById('gifts');
            div.scrollIntoView();
          }}
        >
          Que tal presentea-los?
        </button>
      </div>
      <img
        className="text-focus-in"
        src="https://db3313cebad1db0a132c-6b847177b4f7a7412ca083eff6571c86.ssl.cf1.rackcdn.com/PostImagem/28507/1.jpg"
        alt=""
      />
    </div>
  );
}

export default Intro;
