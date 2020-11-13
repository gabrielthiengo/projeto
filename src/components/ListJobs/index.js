/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import Accordion from '~/components/Accordion';
import CustomChip from '~/components/CustomChip';
import Loader from 'react-loader-spinner';

import { numberOfLine, formatDate } from '~/utils/functions';
import './styles.css';

function ListJobs({ title, children, data }) {
  return (
    <div className="jobs">
      <div className="jobs-header">
        {children}
        <h3>{title}</h3>
      </div>

      {data !== null ? (
        data.map(dataItem => {
          return (
            <div key={dataItem.id}>
              <Accordion
                title={dataItem.title}
                value={`R$ ${dataItem.value.toFixed(2)}`}
                chips={
                  <>
                    <CustomChip
                      text={dataItem.status}
                      background="136, 0, 21, 0.2"
                      color="#880015"
                    />
                    <CustomChip
                      text={`Pag: ${dataItem.type}`}
                      background="255, 127, 39, 0.2"
                      color="#FF7F27"
                    />
                    <CustomChip
                      text={`Publicado: ${formatDate(dataItem.created_at)}`}
                      background="127, 127, 127, 0.2"
                      color="#7F7F7F"
                    />
                  </>
                }
              >
                <div className="accordion-content">
                  <p>{numberOfLine(dataItem.description)}</p>

                  <div className="accordion-footer">
                    <Link to={`/work-detail/${dataItem.id}`}>
                      <FaPlus size={11} /> <p>Ver Detalhes</p>
                    </Link>
                  </div>
                </div>
              </Accordion>
            </div>
          );
        })
      ) : (
        <div className="empty-data">
          <Loader
            type="Oval"
            color="#3F3D56"
            height={30}
            width={30}
          />
        </div>
      )}
    </div>
  );
}

export default ListJobs;

ListJobs.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  data: PropTypes.oneOfType([PropTypes.array]),
};

ListJobs.defaultProps = {
  data: null,
};
