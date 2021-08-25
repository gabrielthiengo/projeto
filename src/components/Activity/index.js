/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import {
  FaRegPlayCircle,
  FaBan,
  FaPowerOff,
  FaRegCheckCircle,
} from 'react-icons/fa';

import './styles.css';

function Activity({ activities, status, handle }) {
  return (
    <div>
      {activities?.map(activity => {
        return (
          <div
            key={activity.id}
            className="activity-container"
            style={{
              background:
                status === 1
                  ? 'rgba(40, 45, 54, 0.05)'
                  : status === 2
                  ? 'rgba(107, 84, 202, 0.05)'
                  : status === 3
                  ? 'rgba(232, 63, 91, 0.05)'
                  : status === 4
                  ? 'rgba(65, 65, 77, 0.05)'
                  : status === 4
                  ? 'rgba(65, 65, 77, 0.05)'
                  : 'rgba(4, 211, 97, 0.05)',
              border:
                moment(activity.start_date).diff(new Date(), 'days') < 0 &&
                status !== 4 &&
                status !== 5
                  ? '1px solid #ffafaf'
                  : '1px solid transparent',
            }}
          >
            {moment(activity.start_date).diff(new Date(), 'days') < 0 &&
              status !== 4 &&
              status !== 5 && <p className="delayed">Tarefa Atrasada</p>}
            <header>
              <h3>{activity.title}</h3>

              <div className="actions">
                {status !== 5 && status !== 4 && status !== 2 && (
                  <FaRegPlayCircle
                    color="#6b54ca"
                    onClick={() => handle(2, activity.id)}
                  />
                )}
                {status !== 5 &&
                  status !== 4 &&
                  status !== 3 &&
                  status !== 1 && (
                    <FaRegCheckCircle
                      color="#04d361"
                      onClick={() => handle(5, activity.id)}
                    />
                  )}
                {status !== 5 &&
                  status !== 4 &&
                  status !== 3 &&
                  status !== 1 && (
                    <FaBan
                      color="#41414d"
                      onClick={() => handle(3, activity.id)}
                    />
                  )}
                {status !== 5 && status !== 4 && (
                  <FaPowerOff
                    color="#e83f5b"
                    onClick={() => handle(4, activity.id)}
                  />
                )}
              </div>
            </header>
            <div className="activity-main">
              <p>{activity.description}</p>

              <span>
                criado pelo(a) <strong>{activity.provider.name}</strong> para o
                dia
                <strong>
                  {` ${moment(activity.start_date).format('DD/MM/YYYY')}`}
                </strong>
              </span>
              <span>
                deverá ser realizada até
                <strong>
                  {` ${moment(activity.end_date).format('DD/MM/YYYY')}`}
                </strong>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Activity;

Activity.propTypes = {
  activities: PropTypes.oneOfType([PropTypes.array]),
  handle: PropTypes.oneOfType([PropTypes.func]).isRequired,
  status: PropTypes.number,
};

Activity.defaultProps = {
  activities: [],
  status: '',
};
