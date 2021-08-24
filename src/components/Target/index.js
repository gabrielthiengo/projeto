/* eslint-disable no-nested-ternary */
/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { FaChartLine } from 'react-icons/fa';
import ExperienceBar from '~/components/ExperienceBar';

import './styles.css';

function Target({ target }) {
  const currResult = target.curr_result;
  const finishTarget = target.value;

  const currDate = moment(target.end_date, 'YYYY-MM-DD');

  const percentToFinish = Math.round(currResult * 100) / finishTarget;
  const endIn = moment
    .duration(currDate.diff(moment(target.start_date, 'YYYY-MM-DD')))
    .asDays()
    .toFixed(0);

  return (
    <div
      className="progress"
      style={{
        background: `${
          target.status === 'Alcançada' ? 'rgba(4,211,97,0.1)' : ''
        }`,
      }}
    >
      <span>
        <FaChartLine
          size={30}
          color={target.status === 'Alcançada' ? '#04d361' : ''}
        />
      </span>
      <div>
        <h4>{target.name}</h4>
        <p style={{ color: `${endIn <= 0 ? 'red' : ''}` }}>
          {endIn < 0
            ? 'Meta finalizada'
            : endIn === 0
            ? 'Termina hoje'
            : `Termina em ${parseInt(endIn)} dias`}
        </p>
        <ExperienceBar
          currExperience={currResult}
          experienceToFinish={finishTarget}
          type={target.type}
        />
      </div>

      <strong
        style={{ color: `${target.status === 'Alcançada' ? '#04d361' : ''}` }}
      >
        {(percentToFinish >= 100 ? 100 : percentToFinish).toFixed(0)}%
      </strong>
    </div>
  );
}

export default Target;

Target.propTypes = {
  target: PropTypes.oneOfType([PropTypes.object]),
};

Target.defaultProps = {
  target: {
    curr_result: 0,
    value: 1,
  },
};
