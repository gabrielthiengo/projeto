/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import {
  FaChartLine,
  FaRegEdit,
  FaExclamationTriangle,
  FaTrashAlt,
} from 'react-icons/fa';
import { Pagination } from '@material-ui/lab/';
import { Form } from '@unform/web';
import moment from 'moment';
import { toast } from 'react-toastify';
import CurrencyFormat from 'react-currency-format';
import Loading from '~/components/Loading';
import Modal from '~/components/Modal';
import Input from '~/components/Input';

import { TargetModel, verifyRequiredFieldsTarget } from '~/models/TargetMoldel';

import './styles.css';

import api from '~/services/api';

function Target() {
  const [targets, setTargets] = useState([]);
  const [search, setSearch] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [newTarget, setNewTarget] = useState(TargetModel);
  const [toggleModal, setToggleModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`target?page=${currPage}&search=${search}`)
      .then(response => {
        setTargets(response.data);
        setIsSubmit(false);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [isSubmit]);

  function handleChangePage(event, value) {
    setCurrPage(value);
  }

  async function handleSubmit() {
    const verifiedTarget = verifyRequiredFieldsTarget(newTarget);

    if (verifiedTarget.status === 'FAILURE') {
      return toast.error(verifiedTarget.message);
    }

    await api
      .post('target/create', {
        name: newTarget.name,
        value: parseFloat(newTarget.value),
        type: newTarget.type,
        start_date: moment(newTarget.start_date, 'DD/MM/YYYY').format(
          'YYYY-MM-DDT00:00:00.101Z'
        ),
        end_date: moment(newTarget.end_date, 'DD/MM/YYYY').format(
          'YYYY-MM-DDT00:00:00.101Z'
        ),
      })
      .then(() => {
        setIsSubmit(true);
        setToggleModal(false);

        setNewTarget(TargetModel);

        return toast.success('Meta criada com sucesso');
      })
      .catch(err => {
        setToggleModal(false);

        return toast.error(err.message);
      });
  }

  async function handleSubmitUpdate() {
    await api
      .put(`target/update/${newTarget.id}`, {
        name: newTarget.name,
        value: parseFloat(newTarget.value),
        type: newTarget.type,
        start_date: moment(newTarget.start_date, 'DD/MM/YYYY').format(
          'YYYY-MM-DDT00:00:00.101Z'
        ),
        end_date: moment(newTarget.end_date, 'DD/MM/YYYY').format(
          'YYYY-MM-DDT00:00:00.101Z'
        ),
      })
      .then(() => {
        setIsSubmit(true);
        setToggleModal(false);
        setIsUpdate(false);

        setNewTarget(TargetModel);

        return toast.success('Meta atualizada com sucesso');
      })
      .catch(err => {
        setToggleModal(false);
        setIsSubmit(true);
        setIsUpdate(false);

        return toast.error(err.message);
      });
  }

  async function handleDeleteTarget(id) {
    await api
      .delete(`target/delete/${id}`)
      .then(() => {
        setIsSubmit(true);
        return toast.success('Meta deletada com sucesso');
      })
      .catch(err => {
        return toast.error(err.message);
      });
  }

  return (
    <div className="page-container">
      <header>
        <div>
          <FaChartLine size={25} color="#F14723" />
          <p>METAS</p>
        </div>

        <div className="search">
          <input
            type="text"
            value={search}
            placeholder="Faça sua busca"
            onChange={e => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="btn-primary"
            onClick={() => setIsSubmit(true)}
          >
            BUSCAR
          </button>
          <button
            type="submit"
            className="btn-secondary"
            onClick={() => {
              setIsSubmit(true);
              setSearch('');
            }}
          >
            LIMPAR
          </button>
          <button
            type="submit"
            className="btn-primary btn-create"
            onClick={() => {
              setToggleModal(true);
            }}
          >
            CRIAR META
          </button>
        </div>
      </header>

      <main>
        <div>
          <table>
            <thead>
              <tr>
                <th>AÇÕES</th>
                <th>CÓDIGO</th>
                <th>STATUS</th>
                <th>NOME</th>
                <th>ALVO</th>
                <th>OBTIDO</th>
                <th>TIPO</th>
                <th>INÍCIO</th>
                <th>FIM</th>
                <th>PROGRESSO</th>
              </tr>
            </thead>
            <tbody>
              {targets?.length !== 0 ? (
                targets?.map(target => {
                  return (
                    <tr key={target.id}>
                      <td
                        id="actions"
                        style={{ textAlign: 'center', width: '50px' }}
                      >
                        <FaRegEdit
                          style={{
                            marginLeft: '7px',
                            color: '#6b54ca',
                            cursor: 'pointer',
                          }}
                          size={15}
                          onClick={() => {
                            target.start_date = moment(
                              target.start_date
                            ).format('DD/MM/YYYY');
                            target.end_date = moment(target.end_date).format(
                              'DD/MM/YYYY'
                            );

                            setNewTarget(target);
                            setToggleModal(true);
                            setIsUpdate(true);
                          }}
                        />
                        <FaTrashAlt
                          style={{
                            marginLeft: '7px',
                            color: '#e83f5b',
                            cursor: 'pointer',
                          }}
                          size={14}
                          onClick={() => {
                            handleDeleteTarget(target.id);
                          }}
                        />
                      </td>
                      <td>#00{target.id}</td>
                      <td>
                        <p>{target.status}</p>
                      </td>
                      <td>{target.name}</td>
                      <td>
                        <p>
                          {target.type === 'vendas' && target.value > 0
                            ? parseFloat(target.value).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                              })
                            : target.value}
                        </p>
                      </td>
                      <td>
                        <p>
                          {target.type === 'vendas' && target.curr_result > 0
                            ? parseFloat(target.curr_result).toLocaleString(
                                'pt-BR',
                                {
                                  style: 'currency',
                                  currency: 'BRL',
                                }
                              )
                            : target.curr_result}
                        </p>
                      </td>
                      <td>
                        <p>{target.type}</p>
                      </td>
                      <td>
                        <p>{moment(target.start_date).format('DD/MM/YYYY')}</p>
                      </td>
                      <td>
                        <p>{moment(target.end_date).format('DD/MM/YYYY')}</p>
                      </td>
                      <td>
                        <p>{target.progress}</p>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>
                    <div style={{ width: '100%' }} className="is-empty">
                      <FaExclamationTriangle size={30} />
                      <h4>Nenhuma meta a ser exibida</h4>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="pagination">
            <Pagination
              count={targets.total}
              color="primary"
              showFirstButton
              showLastButton
              onChange={handleChangePage}
            />
          </div>
        </div>
      </main>
      {isLoading && <Loading />}

      {toggleModal && (
        <Modal title={isUpdate ? 'Atualizar Meta' : 'Criar nova Meta'}>
          <Form onSubmit={isUpdate ? handleSubmitUpdate : handleSubmit}>
            <section>
              <Input
                label="Título"
                name="name"
                disabled={
                  newTarget.status === 'Alcançado' ||
                  (newTarget.status === 'Finalizado' && 'disabled')
                }
                value={newTarget.name}
                onChange={e =>
                  setNewTarget({
                    ...newTarget,
                    name: e.target.value,
                  })
                }
              />
              <div className="input-content">
                <label htmlFor="type">Tipo</label>
                <div className="input-block">
                  <select
                    name="type"
                    id="type"
                    disabled={
                      newTarget.status === 'Alcançado' ||
                      (newTarget.status === 'Finalizado' && 'disabled')
                    }
                    value={newTarget.type}
                    onChange={e =>
                      setNewTarget({
                        ...newTarget,
                        type: e.target.value,
                      })
                    }
                  >
                    <option value={0}>Selecione</option>
                    <option value="vendas">Meta de vendas</option>
                    <option value="clientes">Prospecção de clientes</option>
                  </select>
                </div>
              </div>
            </section>

            <div style={{ marginTop: '10px' }}>
              <Input
                name="value"
                label="Alvo"
                type="number"
                disabled={
                  newTarget.status === 'Alcançado' ||
                  (newTarget.status === 'Finalizado' && 'disabled')
                }
                value={newTarget.value}
                onChange={e =>
                  setNewTarget({
                    ...newTarget,
                    value: e.target.value,
                  })
                }
              />
            </div>

            <section>
              <div className="input-content">
                <label htmlFor="start_date">Data início</label>
                <div className="input-block">
                  <CurrencyFormat
                    format="##/##/####"
                    mask="_"
                    disabled={
                      newTarget.status === 'Alcançado' ||
                      (newTarget.status === 'Finalizado' && 'disabled')
                    }
                    value={newTarget.start_date}
                    onChange={e => {
                      const date = e.target.value;
                      const replace = date.replace('_', '');

                      let endDate = '';

                      if (replace.length > 9) {
                        endDate = moment(e.target.value, 'DD/MM/YYYY')
                          .add(1, 'months')
                          .format('DD/MM/YYYY');
                      }

                      setNewTarget({
                        ...newTarget,
                        start_date: e.target.value,
                        end_date: endDate !== '' ? endDate : '__/__/____',
                      });
                    }}
                  />
                </div>
              </div>
              <div className="input-content">
                <label htmlFor="start_date">Data conclusão</label>
                <div className="input-block">
                  <CurrencyFormat
                    format="##/##/####"
                    mask="_"
                    disabled={
                      newTarget.status === 'Alcançado' ||
                      (newTarget.status === 'Finalizado' && 'disabled')
                    }
                    value={newTarget.end_date}
                    onChange={e =>
                      setNewTarget({
                        ...newTarget,
                        end_date: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </section>
            <footer>
              <button
                className="btn-secondary"
                type="button"
                onClick={() => {
                  setNewTarget({
                    title: '',
                    description: '',
                    user_destination_id: 0,
                    start_date: '',
                    end_date: '',
                  });
                  setToggleModal(false);
                  setIsUpdate(false);
                }}
              >
                Cancelar
              </button>
              <button
                className="btn-primary"
                type="submit"
                disabled={
                  newTarget.status === 'Alcançado' ||
                  (newTarget.status === 'Finalizado' && 'disabled')
                }
              >
                {isUpdate ? 'Atualizar' : 'Salvar'}
              </button>
            </footer>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default Target;
