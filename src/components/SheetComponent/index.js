/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import { toast } from 'react-toastify';
import { FaExclamationTriangle, FaRegEdit, FaTrashAlt } from 'react-icons/fa';

import { Form } from '@unform/web';
import { SheetModel, verifyRequiredFieldsSheet } from '~/models/SheetModel';
import Modal from '~/components/Modal';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';

import './styles.css';
import api from '~/services/api';

function SheetComponent({ sheetItems, onChange }) {
  const [toggleModal, setToggleModal] = useState(false);
  const [sheetModel, setSheetModel] = useState(SheetModel);

  function deleteSheetItem(id) {
    api.delete(`sheet/item/delete/${id}`).then(() => {
      onChange();
    });
  }

  function handleSubmit() {
    const verifiedSheet = verifyRequiredFieldsSheet(sheetModel);

    if (verifiedSheet.status === 'FAILURE') {
      toast.error(verifiedSheet.message);
    } else {
      sheetModel.due_date = moment(sheetModel.due_date, 'DD/MM/YYYY').format(
        'YYYY-MM-DD'
      );

      api.put(`sheet/item/update/${sheetModel.id}`, sheetModel).then(() => {
        toast.success('Lançamento adicionado com sucesso');
        onChange();
        setToggleModal(false);
      });
    }
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
          <div className="row-item" style={{ justifyContent: 'center' }}>
            Ações
          </div>
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
                <FaRegEdit
                  size={16}
                  className="btn-icon"
                  style={{ color: '#5a46aa', borderColor: '#5a46aa' }}
                  title="Editar Lançamento"
                  onClick={() => {
                    setSheetModel({
                      id: sheet.id,
                      description: sheet.description,
                      status: sheet.status,
                      value: sheet.value,
                      due_date: moment(sheet.due_date).format('DD/MM/YYYY'),
                      observation: sheet.observation,
                      sheet_id: sheet.sheet_id,
                    });
                    setToggleModal(true);
                  }}
                />
                <FaTrashAlt
                  style={{ color: '#e83f5b', borderColor: '#e83f5b' }}
                  className="btn-icon"
                  title="Excluir Lançamento"
                  size={16}
                  onClick={() => {
                    deleteSheetItem(sheet.id);
                  }}
                />
              </div>
            </div>
          );
        })}

        {sheetItems.length === 0 && (
          <div className="is-empty">
            <FaExclamationTriangle size={25} />
            <h4>Não existe lançamentos para essa planilha</h4>
          </div>
        )}
      </main>

      {toggleModal && (
        <Modal title="Editar Lançamento">
          <Form onSubmit={handleSubmit}>
            <section>
              <Input
                label="Descrição"
                name="descrição"
                value={sheetModel.description}
                onChange={e =>
                  setSheetModel({
                    ...sheetModel,
                    description: e.target.value,
                  })
                }
              />
              <div className="input-content">
                <label htmlFor="user_destination_id">Status</label>
                <div className="input-block">
                  <select
                    name="status"
                    id="status"
                    value={sheetModel.status}
                    onChange={e =>
                      setSheetModel({
                        ...sheetModel,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value="">Selecione</option>
                    <option value="payable">A Pagar</option>
                    <option value="pay_out">Pago</option>
                  </select>
                </div>
              </div>
            </section>
            <section>
              <Input
                label="Valor"
                name="value"
                value={sheetModel.value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
                onChange={e =>
                  setSheetModel({
                    ...sheetModel,
                    value: e.target.value,
                  })
                }
              />
              <div className="input-content">
                <label htmlFor="due_date">Data de vencimento</label>
                <div className="input-block">
                  <CurrencyFormat
                    format="##/##/####"
                    mask="_"
                    value={sheetModel.due_date}
                    onChange={e =>
                      setSheetModel({
                        ...sheetModel,
                        due_date: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </section>

            <div>
              <TextArea
                name="observation"
                label="Observação"
                value={sheetModel.observation}
                onChange={e =>
                  setSheetModel({
                    ...sheetModel,
                    observation: e.target.value,
                  })
                }
              />
            </div>

            <footer>
              <button
                className="btn-secondary"
                type="button"
                onClick={() => {
                  setSheetModel(SheetModel);
                  setToggleModal(false);
                }}
              >
                Cancelar
              </button>
              <button className="btn-primary" type="submit">
                Salvar
              </button>
            </footer>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default SheetComponent;

SheetComponent.propTypes = {
  onChange: PropTypes.oneOfType([PropTypes.func]).isRequired,
  sheetItems: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
