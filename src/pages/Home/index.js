/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  FaWhatsapp,
  FaMailBulk,
  FaDownload,
  FaBirthdayCake,
  FaExclamationTriangle,
} from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';

import { useDispatch, useSelector } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';
import { updateLoadingStatus } from '../../store/modules/loading/actions';
import {
  updateActivityRequest,
  createActivityRequest,
  setActivity,
} from '../../store/modules/activity/actions';

import maleAvatar from '~/assets/images/logos/male_avatar.png';
import femaleAvatar from '~/assets/images/logos/female_avatar.png';
import waveDark from '~/assets/images/icons/wave-dark.PNG';
import waveLight from '~/assets/images/icons/wave-lighter.PNG';

import { formatDate } from '~/utils/functions';

import Target from '~/components/Target';
import Activity from '~/components/Activity';
import ShimmerActivity from '~/components/ShimmerActivity';
import ShimmerTarget from '~/components/ShimmerTarget';
import Modal from '~/components/Modal';
import Input from '~/components/Input';

import './styles.css';

import api from '~/services/api';

function Home() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);
  const { activities } = useSelector(state => state.activity);
  const { loading } = useSelector(state => state.loading);
  const [response, setResponse] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const [newActivity, setNewActivity] = useState({
    title: '',
    description: '',
    user_destination_id: 0,
    start_date: '',
    end_date: '',
  });

  const date = formatDate();

  useEffect(() => {
    dispatch(updateLoadingStatus(true));
    api
      .get('scaffold?page=1')
      .then(res => {
        setResponse(res.data);
        setIsUpdate(false);
        dispatch(updateLoadingStatus(false));
        dispatch(setActivity(res.data.activities));
      })
      .catch(() => {
        setIsUpdate(false);
        dispatch(updateLoadingStatus(false));
      });
  }, [isUpdate]);

  const { totalSales, newsCustomers } = response;

  function handleStatusActivity(status, activity) {
    dispatch(updateActivityRequest(status, activity, false));
  }

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
    <div className="home-container">
      <div className="navbar">
        <div className="login">
          <div>
            <h4>{profile.name}</h4>
            <p>{profile.email}</p>
          </div>
          <img
            src={profile.sex === 'M' ? maleAvatar : femaleAvatar}
            alt="user"
          />
        </div>
      </div>
      <main>
        <section className="left-container">
          <div className="birthday-container">
            <header>
              <h3>ANIVERSARIANTES DO MÊS</h3>
              <FaBirthdayCake size={18} />
            </header>

            {!loading ? (
              response.birthdayMonth?.length !== 0 ? (
                response.birthdayMonth?.map(customer => {
                  return (
                    <div key={customer.email}>
                      <div className="client-info">
                        <img
                          src={
                            customer.avatar !== null
                              ? customer.avatar
                              : customer.sex === 'M'
                              ? maleAvatar
                              : femaleAvatar
                          }
                          alt="cliente"
                        />
                        <div>
                          <Link to={`/cliente/info/${customer.id}/home`}>
                            <h4>{customer.name}</h4>
                          </Link>
                          <p>
                            dia{' '}
                            {moment(customer.birthdate).format('DD/MM/YYYY')}
                          </p>
                        </div>
                      </div>
                      <div className="client-data">
                        <a
                          href={`https://wa.me/${
                            customer.cellphone !== ''
                              ? customer.cellphone
                                  .replace('-', '')
                                  .replace('(', '')
                                  .replace(')', '')
                                  .replace(' ', '')
                              : customer.phone
                                  .replace('-', '')
                                  .replace('(', '')
                                  .replace(')', '')
                                  .replace(' ', '')
                          }`}
                          target="_blank"
                          data-tip={
                            customer.cellphone !== ''
                              ? customer.cellphone
                              : customer.phone
                          }
                        >
                          <FaWhatsapp size={18} color="#04d361" />
                        </a>
                        <span data-tip={customer.email}>
                          <FaMailBulk size={18} color="#2400b6" />
                        </span>
                        <ReactTooltip />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="is-empty">
                  <FaExclamationTriangle size={25} />
                  <h4>Não tem aniversariantes no mês</h4>
                </div>
              )
            ) : (
              <ShimmerTarget />
            )}
          </div>
          <br />
          <div className="activities-container">
            <header>
              <h3>SUAS ATIVIDADES</h3>
              <button
                className="btn-primary"
                type="button"
                onClick={() => setToggleModal(true)}
              >
                <strong>+</strong> Atividade
              </button>
            </header>

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
                          {response.users?.map(user => {
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
                    <Input
                      label="Descrição"
                      name="description"
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

            {!loading ? (
              activities?.length !== 0 ? (
                activities?.map(activity => {
                  return (
                    <div className="status-activity" key={activity.id}>
                      <h4
                        style={{
                          borderLeft: `${
                            activity.id === 1
                              ? '2px solid #282d36'
                              : activity.id === 2
                              ? '2px solid #6b54ca'
                              : activity.id === 3
                              ? '2px solid #e83f5b'
                              : activity.id === 4
                              ? '2px solid #41414d'
                              : '2px solid #04d361'
                          }`,
                        }}
                      >
                        {activity.description}
                      </h4>
                      <Activity
                        status={activity.id}
                        handle={handleStatusActivity}
                        activities={activity.Activities}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="is-empty">
                  <FaExclamationTriangle size={25} />
                  <h4>Não existem atividades ativas</h4>
                </div>
              )
            ) : (
              <ShimmerActivity />
            )}
          </div>
        </section>
        <section className="right-container">
          <div className="card-container">
            <div>
              <div>
                <CurrencyFormat
                  value={totalSales}
                  displayType="text"
                  thousandSeparator
                  prefix="R$ "
                  renderText={value => <h4>{value}</h4>}
                />
                <p>Vendas</p>
              </div>
              <img src={waveDark} alt="" />
            </div>
            <div>
              <div>
                <h4>{newsCustomers}</h4>
                <p>Clientes</p>
              </div>
              <img src={waveLight} alt="" />
            </div>
          </div>
          <br />
          <section>
            <header>
              <h4>{date}</h4>
              <div>
                <FaDownload size={16} />
              </div>
            </header>

            {!loading ? (
              response.targets?.length !== 0 ? (
                response.targets?.map(target => {
                  return <Target key={target.id} target={target} />;
                })
              ) : (
                <div className="is-empty">
                  <FaExclamationTriangle size={25} />
                  <h4>Não existem metas ativas</h4>
                </div>
              )
            ) : (
              <ShimmerTarget />
            )}
          </section>
        </section>
      </main>
    </div>
  );
}

export default Home;
