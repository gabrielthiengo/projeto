import React from 'react';
import PropTypes from 'prop-types';

import cover from '~/assets/images/06.jpeg';

import './styles.css';

function Intro({ husband, wife, coverPhoto }) {
  return (
    <div id="intro" className="intro-container">
      <div>
        <h2 className="tracking-in-expand">
          {husband} & {wife}
        </h2>
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
      <img className="text-focus-in" src={cover} alt="cover" />
    </div>
  );
}

export default Intro;

Intro.propTypes = {
  husband: PropTypes.string.isRequired,
  wife: PropTypes.string.isRequired,
  coverPhoto: PropTypes.string.isRequired,
};
