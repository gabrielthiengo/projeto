import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function ExperienceBar({ currExperience, experienceToFinish }) {
  const percentToFinish = Math.round(currExperience * 100) / experienceToFinish;

  return (
    <div className="experience-bar">
      <span>0</span>

      <div style={{ background: 'rgb(240, 240, 240)' }}>
        <div
          style={{
            width: `${percentToFinish >= 100 ? 100 : percentToFinish}%`,
          }}
        />

        {currExperience > 0 && (
          <span
            className="current-experience"
            style={{
              left: '50%',
            }}
          >
            {currExperience}
          </span>
        )}
      </div>
      <span>{experienceToFinish}</span>
    </div>
  );
}

export default ExperienceBar;

ExperienceBar.propTypes = {
  currExperience: PropTypes.number.isRequired,
  experienceToFinish: PropTypes.number.isRequired,
};
