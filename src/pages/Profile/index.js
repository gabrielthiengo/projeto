/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import Navbar from '~/components/Navbar';

import AvatarInput from './AvatarInput';

import { cepMask } from '~/utils/functions';

import './styles.css';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [zipCode, setZipCode] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (profile.address.zip_code !== null)
      setZipCode(cepMask(profile.address.zip_code));
  });

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());

    toast.success('Logout realizado com sucesso!');
  }

  return (
    <div className="wrapper-container">
      <Navbar />
      <div className="profile-container">
        <Form initialData={profile} onSubmit={handleSubmit}>
          <div className="input-container w3-animate-right">
            <AvatarInput name="avatar_id" />
            <div className="side-container">
              <div className="left">
                <h4>Dados Pessoais:</h4>
                <Input
                  name="full_name"
                  placeholder="Nome completo"
                  autoComplete="off"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu endereço de email"
                  autoComplete="off"
                />
                <Input
                  name="phone"
                  type="text"
                  placeholder="Seu telefone"
                  autoComplete="off"
                />
              </div>
              <div className="right">
                <h4>Endereço:</h4>
                <div id="content" style={{ marginTop: '0px' }}>
                  <Input
                    name="address.street"
                    type="text"
                    placeholder="Sua rua"
                    autoComplete="off"
                  />
                  <Input
                    name="address.complement"
                    type="text"
                    placeholder="Complemento"
                    autoComplete="off"
                  />
                </div>
                <div id="content">
                  <Input
                    name="address.number"
                    type="text"
                    placeholder="Número da sua casa"
                    autoComplete="off"
                  />
                  <Input
                    name="address.zip_code"
                    type="text"
                    placeholder="Seu cep"
                    autoComplete="off"
                    value={zipCode}
                    onChange={e => setZipCode(cepMask(e.target.value))}
                  />
                </div>
                <div id="content">
                  <Input
                    name="address.city"
                    type="text"
                    placeholder="Sua cidade"
                    autoComplete="off"
                  />
                  <Input
                    name="address.state"
                    type="text"
                    placeholder="Seu estado"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="btn-def w3-animate-bottom" type="submit">
            Atualizar perfil
          </button>
        </Form>

        <button
          id="logout-btn"
          className="btn-def w3-animate-bottom"
          onClick={handleSignOut}
          type="button"
        >
          Sair da DEVSTORE
        </button>
      </div>
    </div>
  );
}
