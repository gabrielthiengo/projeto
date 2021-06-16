/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import moment from 'moment';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import {
  FaUsers,
  FaExclamationTriangle,
  FaLongArrowAltLeft,
} from 'react-icons/fa';
import CurrencyFormat from 'react-currency-format';

import Loading from '~/components/Loading';
import Modal from '~/components/Modal';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';

import { createActivityRequest } from '~/store/modules/activity/actions';

import './styles.css';

import api from '~/services/api';

function CustomerView() {
  const dispatch = useDispatch();
  const { customerId, route } = useParams();
  const [customer, setCustomer] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [newActivity, setNewActivity] = useState({
    title: '',
    description: '',
    user_destination_id: 0,
    customer_id: customerId,
    start_date: '',
    end_date: '',
  });

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`customers/show?id=${customerId}`)
      .then(response => {
        setCustomer(response.data.customer);
        setUsers(response.data.users);
        setIsLoading(false);
        setLoadingState(false);
      })
      .catch(() => setIsLoading(false));
  }, [loadingState]);

  function handleSubmit() {
    if (newActivity.title === '') {
      toast.error('O título deve ser informado');
    } else if (newActivity.description === '') {
      toast.error('A descrição deve ser informado');
    } else if (newActivity.user_destination_id === 0) {
      toast.error('O usuário deve ser informado');
    } else if (newActivity.start_date === '') {
      toast.error('A data de início deve ser informada');
    } else if (newActivity.end_date === '') {
      toast.error('A data de fim deve ser informada');
    } else {
      dispatch(createActivityRequest(newActivity));
      setToggleModal(false);
      setLoadingState(true);

      setNewActivity({
        title: '',
        description: '',
        user_destination_id: 0,
        start_date: '',
        end_date: '',
      });
    }
  }

  return (
    <div className="customer-view">
      <header>
        <div>
          <Link to={`${route === 'home' ? '/' : '/clientes'}`}>
            <FaLongArrowAltLeft />
            VOLTAR
          </Link>
          <section>
            <FaUsers size={25} color="#F14723" />
            <p>{customer?.name.toUpperCase()}</p>
          </section>
        </div>
        <button
          type="submit"
          className="btn-primary"
          onClick={() => setToggleModal(true)}
        >
          <strong>+ </strong> ATIVIDADE
        </button>
      </header>
      <main>
        <section>
          <h4>DADOS DO CLIENTE</h4>
          <br />
          <div>
            <span>
              <strong>USERNAME:</strong> {customer?.username}
            </span>
            <span>
              <strong>EMAIL:</strong> {customer?.email}
            </span>
            <span>
              <strong>CPF:</strong> {customer?.cpf}
            </span>
            <span>
              <strong>RG:</strong> {customer?.rg}
            </span>
            <span>
              <strong>SEXO:</strong>
              {customer?.sex === 'M' ? 'MASCULINO' : 'FEMININO'}
            </span>
            <span>
              <strong>DT NASCIMENTO:</strong>
              {moment(customer?.birthdate).format('DD/MM/YYYY')}
            </span>
            <span>
              <strong>CELULAR:</strong> {customer?.cellphone}
            </span>
            <span>
              <strong>TELEFONE:</strong> {customer?.phone}
            </span>
          </div>
          <br />

          <div className="customer-activities">
            <h4>ATIVIDADES</h4>

            {customer?.activities?.length !== 0 ? (
              customer?.activities?.map(activity => {
                return (
                  <div key={activity.id}>
                    <div>
                      <header>
                        <h4>{activity.title}</h4>
                        <h4 className="status">
                          {activity.ActivityStatus.description}
                        </h4>
                      </header>
                      <p>{activity.description}</p>

                      <div>
                        <span>RESPONSÁVEL: {activity.user.name}</span>
                        <span>
                          PREVISTO PARA DIA:{' '}
                          {moment(activity.end_date).format('DD/MM/YYYY')}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="is-empty">
                <FaExclamationTriangle size={25} />
                <h4>Não existem atividades para {customer?.name}</h4>
              </div>
            )}
          </div>
        </section>
        <section>
          <h4>COMPRAS REALIZADAS</h4>
          <br />
          <main>
            {customer?.orders?.length !== 0 ? (
              customer?.orders?.map(order => {
                return (
                  <div key={order.id}>
                    <header>
                      <h5>
                        PEDIDO: <strong>{order.number}</strong>
                      </h5>
                      <h5>
                        STATUS: <strong>{order.status}</strong>
                      </h5>
                    </header>
                    <div>
                      <span>
                        DATA DA COMPRA:{' '}
                        <strong>
                          {moment(order.created_at).format('DD/MM/YYYY')}
                        </strong>
                      </span>
                      <span>
                        PAGAMENTO: <strong>{order.payment_method_title}</strong>
                      </span>
                      <span>
                        PAGAMENTO: <strong>{order.payment_method_title}</strong>
                      </span>
                      <span>
                        FRETE:{' '}
                        <CurrencyFormat
                          value={order.shipping_total}
                          displayType="text"
                          thousandSeparator
                          prefix="R$ "
                          renderText={value => <strong>{value}</strong>}
                        />
                      </span>
                      <span>
                        DESCONTO:{' '}
                        <CurrencyFormat
                          value={order.discount_total}
                          displayType="text"
                          thousandSeparator
                          prefix="R$ "
                          renderText={value => <strong>{value}</strong>}
                        />
                      </span>
                      <span>
                        TOTAL:{' '}
                        <CurrencyFormat
                          value={order.total}
                          displayType="text"
                          thousandSeparator
                          prefix="R$ "
                          renderText={value => <strong>{value}</strong>}
                        />
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="is-empty">
                <FaExclamationTriangle size={25} />
                <h4>{customer?.name} não efetuou nenhuma compra</h4>
              </div>
            )}
          </main>
        </section>
      </main>
      {isLoading && <Loading />}

      {toggleModal && (
        <Modal title="Criar nova atividade">
          <Form onSubmit={handleSubmit}>
            <section>
              <Input
                label="Título"
                name="title"
                value={newActivity.title}
                onChange={e =>
                  setNewActivity({
                    ...newActivity,
                    title: e.target.value,
                  })
                }
              />
              <div className="input-content">
                <label htmlFor="user_destination_id">Usuário</label>
                <div className="input-block">
                  <select
                    name="user_destination_id"
                    id="user"
                    value={newActivity.user_destination_id}
                    onChange={e =>
                      setNewActivity({
                        ...newActivity,
                        user_destination_id: e.target.value,
                      })
                    }
                  >
                    <option value={0}>Selecione</option>
                    {users?.map(user => {
                      return (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </section>

            <div>
              <TextArea
                name="description"
                label="Descrição"
                value={newActivity.description}
                onChange={e =>
                  setNewActivity({
                    ...newActivity,
                    description: e.target.value,
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
                    value={newActivity.start_date}
                    onChange={e =>
                      setNewActivity({
                        ...newActivity,
                        start_date: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="input-content">
                <label htmlFor="start_date">Data conclusão</label>
                <div className="input-block">
                  <CurrencyFormat
                    format="##/##/####"
                    mask="_"
                    value={newActivity.end_date}
                    onChange={e =>
                      setNewActivity({
                        ...newActivity,
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
                  setNewActivity({
                    title: '',
                    description: '',
                    user_destination_id: 0,
                    start_date: '',
                    end_date: '',
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
    </div>
  );
}

export default CustomerView;
