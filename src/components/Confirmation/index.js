/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaPlus, FaTimesCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import api from '~/services/api';

import './styles.css';

function Confirmation({ weddingId }) {
  const [guest, setGuest] = useState({
    name: '',
    lastName: '',
    wedding_id: weddingId,
    confirmed: true,
  });
  const [listGuest, setListGuest] = useState([]);

  function handleAddGuest() {
    setListGuest(listGuest.concat(guest));

    setGuest({
      name: '',
      lastName: '',
      wedding_id: weddingId,
      confirmed: true,
    });
  }

  function handleRemoveGuest(name, lastName) {
    setListGuest(
      listGuest.filter(e => e.name !== name && e.lastName !== lastName)
    );
  }

  function handleSubmit() {
    api
      .post('list/guest', listGuest)
      .then(res => {
        toast.success(res.data.message);

        setGuest({
          name: '',
          lastName: '',
          wedding_id: weddingId,
          confirmed: true,
        });
        setListGuest([]);
      })
      .catch(err => {
        toast.error(err.data.message);
      });
  }

  return (
    <div id="confirmation" className="confirmation-container">
      <h2>Confirmar Presença</h2>

      <p>
        Os noivos esperam por longos meses até a chegada do Grande Dia.
        Decoração, trilha sonora, roupas, convidados, entre outros, integram uma
        lista recheada de ansiedade e preocupação. E tudo isso para compartilhar
        esse momento tão incrível com familiares e amigos. Confirme sua presença
        nessa data tão especial.
      </p>

      <div className="form">
        <div className="guest">
          <div className="input-block">
            <span>Nome:</span>
            <input
              type="text"
              value={guest.name}
              onChange={e => {
                setGuest({
                  ...guest,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="input-block">
            <span>Sobrenome:</span>
            <input
              type="text"
              value={guest.lastName}
              onChange={e => {
                setGuest({
                  ...guest,
                  lastName: e.target.value,
                });
              }}
            />
          </div>

          <button
            className="add-guest-button"
            type="button"
            disabled={guest.name === '' && guest.lastName === ''}
            onClick={() => {
              if (guest.name !== '' && guest.lastName !== '') {
                handleAddGuest();
              }
            }}
          >
            <FaPlus />
          </button>
        </div>
        <div className="guest-list">
          {listGuest.length !== 0 &&
            listGuest.map(person => {
              return (
                <div key={person.name}>
                  <p>{`${person.name} ${person.lastName}`}</p>
                  <FaTimesCircle
                    onClick={() => {
                      handleRemoveGuest(person.name, person.lastName);
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="add-guest">
          <p>* Adicione as pessoas de sua família que irão ao evento</p>
          <button
            disabled={listGuest.length === 0}
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;

Confirmation.propTypes = {
  weddingId: PropTypes.number,
};

Confirmation.defaultProps = {
  weddingId: 0,
};
