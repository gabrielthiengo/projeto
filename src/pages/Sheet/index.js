/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import moment from 'moment';
import { Form } from '@unform/web';
import CurrencyFormat from 'react-currency-format';
import { FaTable, FaPlusSquare, FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import { SheetModel, verifyRequiredFieldsSheet } from '~/models/SheetModel';

import Loading from '~/components/Loading';
import SheetComponent from '~/components/SheetComponent';
import Modal from '~/components/Modal';

import api from '~/services/api';

import './styles.css';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';

function Sheet() {
  const [newSheet, setSheet] = useState({
    id: 0,
    title: '',
    is_active: true,
  });
  const [sheets, setSheets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleModalSheet, setToggleModalSheet] = useState(false);
  const [sheetModel, setSheetModel] = useState(SheetModel);

  useEffect(() => {
    setIsLoading(true);
    api
      .get('sheet/item')
      .then(response => {
        setSheets(response.data);

        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });

    setIsUpdate(false);
  }, [isUpdate]);

  function onChangeComponent() {
    setIsUpdate(true);
  }

  function handleSubmitCreateSheet() {
    if (newSheet.title === '') {
      toast.error('Preencha os campos obrigatórios');
    } else if (newSheet.id === 0) {
      api.post('/sheet/create', newSheet).then(() => {
        toast.success('Planilha criada com sucesso');
        setToggleModal(false);
        setIsUpdate(true);
      });
    } else {
      api.put(`/sheet/update/${newSheet.id}`, newSheet).then(() => {
        setToggleModal(false);
        toast.success('Planilha atualizada com sucesso');
        setIsUpdate(true);
      });
    }
  }

  function handleDelete(id) {
    api.delete(`/sheet/delete/${id}`).then(() => {
      setToggleModal(false);
      toast.success('Planilha atualizada com sucesso');
      setIsUpdate(true);
    });
  }

  function sheetItemCreate() {
    const verified = verifyRequiredFieldsSheet(sheetModel);

    if (verified.status === 'FAILURE') {
      toast.error(verified.message);
    } else {
      sheetModel.due_date = moment(sheetModel.due_date, 'DD/MM/YYYY').format(
        'YYYY-MM-DD'
      );

      api.post('sheet/item/create', sheetModel).then(() => {
        toast.success('Lançamento adicionado com sucesso');
        setIsUpdate(true);
        setToggleModalSheet(false);
      });
    }
  }

  return (
    <div className="page-container">
      <header>
        <div>
          <FaTable size={25} color="#F14723" />
          <p>PLANILHAS</p>
        </div>

        <div className="search">
          <button
            type="submit"
            className="btn-primary"
            onClick={() => {
              setSheet({
                ...newSheet,
                id: 0,
                is_active: true,
              });
              setToggleModal(true);
            }}
          >
            + PLANILHA
          </button>
          <button type="submit" className="btn-secondary" onClick={() => {}}>
            VER PLANILHAS
          </button>
        </div>
      </header>

      <main>
        <div className="sheet-container">
          {sheets.map(sheet => {
            return (
              <div key={sheet.id} className="sheet-content">
                <header>
                  {sheet.title}
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaPlusSquare
                      size={18}
                      className="btn-icon"
                      title="Novo lançamento"
                      onClick={() => {
                        setSheetModel({
                          ...sheetModel,
                          sheet_id: sheet.id,
                        });
                        setToggleModalSheet(true);
                      }}
                    />
                    <FaRegEdit
                      style={{ color: '#5a46aa', borderColor: '#5a46aa' }}
                      size={18}
                      className="btn-icon"
                      title="Editar Planilha"
                      onClick={() => {
                        setSheet({
                          id: sheet.id,
                          is_active: sheet.is_active,
                          title: sheet.title,
                        });
                        setToggleModal(true);
                      }}
                    />
                    <FaTrashAlt
                      style={{ color: '#e83f5b', borderColor: '#e83f5b' }}
                      size={18}
                      className="btn-icon"
                      title="Excluir planilha"
                      onClick={() => {
                        handleDelete(sheet.id);
                      }}
                    />
                  </div>
                </header>
                <SheetComponent
                  key={sheet.id}
                  title={sheet.title}
                  total={sheet.total}
                  sheetItems={sheet.SheetItems}
                  onChange={() => {
                    onChangeComponent();
                  }}
                />
                <footer>
                  <p>
                    TOTAL:{' '}
                    {sheet.total.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </footer>
              </div>
            );
          })}
        </div>
      </main>

      {isLoading && <Loading />}

      {toggleModal && (
        <Modal
          title={newSheet.id === 0 ? 'Criar Nova Planilha' : 'Editar Planilha'}
        >
          <Form onSubmit={handleSubmitCreateSheet}>
            <section>
              <Input
                label="Título"
                name="title"
                value={newSheet.title}
                onChange={e =>
                  setSheet({
                    ...newSheet,
                    title: e.target.value,
                  })
                }
              />
              <div className="input-content">
                <label htmlFor="status">Status</label>
                <div className="input-block">
                  <select
                    name="status"
                    id="status"
                    value={newSheet.is_active}
                    onChange={e =>
                      setSheet({
                        ...newSheet,
                        is_active: e.target.value,
                      })
                    }
                  >
                    <option value={false}>Selecione</option>
                    <option value={true}>Ativo</option>
                    <option value={false}>Inativo</option>
                  </select>
                </div>
              </div>
            </section>
            <footer>
              <button
                className="btn-secondary"
                type="button"
                onClick={() => {
                  setSheet({
                    id: 0,
                    title: '',
                  });
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

      {toggleModalSheet && (
        <Modal title="Criar Novo Lançamento">
          <Form onSubmit={sheetItemCreate}>
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
                type="number"
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
                  setSheet(SheetModel);
                  setToggleModalSheet(false);
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

export default Sheet;
