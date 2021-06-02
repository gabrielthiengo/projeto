import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import { FaCheckCircle, FaBan, FaPlay, FaPowerOff } from 'react-icons/fa';

import Moment from 'react-moment';

import './styles.css';

function Activity({ activities }) {
  return (
    <div className="activity">
      {activities?.map(status => {
        return (
          <main key={status.description}>
            <div className="status">
              <div className="line" />
              {status.description}
            </div>
            {status.Activities?.map(activity => {
              return (
                <div key={activity.title} className="activity-content">
                  <div className="activity-header">
                    <h4>{activity.title}</h4>
                    <div className="actions">
                      {status.id !== 2 && status.id !== 5 && (
                        <button type="button">
                          <FaPlay color="#f37920" data-tip="Iniciar" />
                          <ReactTooltip />
                        </button>
                      )}
                      {status.id !== 5 &&
                        status.id !== 1 &&
                        status.id !== 3 &&
                        status.id !== 4 && (
                          <button type="button">
                            <FaCheckCircle
                              color="#04d361"
                              data-tip="Concluir"
                            />
                            <ReactTooltip />
                          </button>
                        )}
                      {status.id !== 5 && status.id !== 3 && status.id !== 4 && (
                        <button type="button">
                          <FaBan color="#e83f5b" data-tip="Bloquear" />
                          <ReactTooltip />
                        </button>
                      )}
                      {status.id !== 3 && status.id !== 5 && (
                        <button type="button">
                          <FaPowerOff color="#6b54ca" data-tip="Cancelar" />
                          <ReactTooltip />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="description">
                    <p>{activity.description}</p>
                  </div>

                  <div className="footer">
                    <div>
                      <p>
                        Início previsto:
                        <strong>
                          <Moment format="DD/MM/YYYY">
                            {activity.start_date}
                          </Moment>
                        </strong>
                      </p>
                      {activity.conclusion_date !== null && (
                        <p>
                          Conclusão:
                          <strong style={{ color: 'green' }}>
                            <Moment format="DD/MM/YYYY">
                              {activity.conclusion_date}
                            </Moment>
                          </strong>
                        </p>
                      )}
                    </div>
                    <p>
                      Criado por:<strong>{activity.user.name}</strong>
                    </p>
                  </div>
                </div>
              );
            })}
          </main>
        );
      })}
    </div>
  );
}

export default Activity;

Activity.propTypes = {
  activities: PropTypes.oneOfType([PropTypes.array]),
};

Activity.defaultProps = {
  activities: [],
};
