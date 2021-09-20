import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import './styles.css';
import api from '~/services/api';

function SheetComponent({ sheetItems, onChange }) {
  async function deleteSheetItem(id) {
    await api.delete(`sheet/item/delete/${id}`).then(() => {
      onChange();
    });
  }

  return (
    <div className="sheetComponent-container">
      <main>
        <div className="row">
          <div className="row-item">Descrição</div>
          <div className="row-item">Valor</div>
          <div className="row-item">Status</div>
          <div className="row-item">Vencimento</div>
          <div className="row-item">Obs</div>
          <div className="row-item">Ações</div>
        </div>

        {sheetItems.map(sheet => {
          return (
            <div className="row-body" key={sheet.id}>
              <div className="row-body-item">
                <p>{sheet.description}</p>
              </div>
              <div className="row-body-item">
                <p>
                  {sheet.value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>
              <div className="row-body-item">
                <p>{sheet.status === 'payable' ? 'A pagar' : 'Pago'}</p>
              </div>
              <div className="row-body-item">
                <p>{moment(sheet.due_date).format('DD/MM')}</p>
              </div>
              <div className="row-body-item">
                <p>{sheet.observation}</p>
              </div>
              <div className="row-body-item actions">
                <FaEdit size={13} />
                <FaTrashAlt
                  className="btn-trash"
                  size={12}
                  onClick={() => {
                    deleteSheetItem(sheet.id);
                  }}
                />
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default SheetComponent;

SheetComponent.propTypes = {
  onChange: PropTypes.oneOfType([PropTypes.func]).isRequired,
  sheetItems: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
