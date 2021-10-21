import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function About({ about, he, she, photoHe, photoShe }) {
  return (
    <div id="about" className="about-container">
      <div className="about-history">
        <div className="about-intro">
          <h2>Nossa História</h2>
          <p>{about.short_description}</p>
        </div>

        <p>{about.description}</p>
      </div>
      <div className="about-personal">
        <div className="about-detail">
          <img src={photoHe} alt="" />
          <h3>{he}</h3>

          <p>{about.about_he}</p>
        </div>
        <div className="about-detail">
          <img src={photoShe} alt="" />
          <h3>{she}</h3>

          <p>{about.about_she}</p>
        </div>
      </div>
    </div>
  );
}

export default About;

About.propTypes = {
  about: PropTypes.oneOfType([PropTypes.object]).isRequired,
  he: PropTypes.string.isRequired,
  she: PropTypes.string.isRequired,
  photoHe: PropTypes.string.isRequired,
  photoShe: PropTypes.string.isRequired,
};
