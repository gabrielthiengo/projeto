import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

import ExperienceBar from '../ExperienceBar';

import './styles.css';

function Mark({ marks }) {
  return (
    <div className="mark">
      {marks?.map(mark => {
        return (
          <div
            key={mark.name}
            className="mark-container"
            style={
              mark.status === 'Alcançada' ? { borderColor: '#04d361' } : null
            }
          >
            <h4>{mark.name}</h4>

            <div className="progress-container">
              <ExperienceBar
                currExperience={
                  mark.curr_result > mark.value ? mark.value : mark.curr_result
                }
                experienceToFinish={mark.value}
              />
            </div>
            <br />
            <div className="footer">
              <p>
                Início:
                <span>
                  <Moment format="DD/MM/YYYY">{mark.start_date}</Moment>
                </span>
              </p>
              <p>
                Fim:
                <span>
                  <Moment format="DD/MM/YYYY">{mark.end_date}</Moment>
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Mark;

Mark.propTypes = {
  marks: PropTypes.oneOfType([PropTypes.array]),
};

Mark.defaultProps = {
  marks: [],
};
