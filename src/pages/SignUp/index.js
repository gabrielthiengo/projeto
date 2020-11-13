import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import Input from '~components/Input';

import api from '~/services/api';

import logo from '~/assets/images/Logotipo.svg';
import history from '~/services/history';
import { cpfMask, removeMask } from '~/utils/functions';
import './styles.css';

function SignIn() {
  const formRef = useRef(null);
  const loading = useSelector(state => state.auth.loading);
  const [cpf, setCpf] = useState('');

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(6, 'Insira seu nome completo')
          .required('Nome é obrigatório'),
        cpf: Yup.string()
          .min(11, 'Cpf Inválido')
          .required('O cpf é obrigatório'),
        phone: Yup.string()
          .min(11, 'Informe com o DDD')
          .required('O telefone é obrigatório'),
        email: Yup.string()
          .email('Insira um email valido!')
          .required('O email é obrigatorio'),
        password: Yup.string()
          .min(6, 'Mínimo 6 caracteres')
          .required('A senha é obrigatoria'),
        confpass: Yup.string()
          .min(6, 'Mínimo 6 caracteres')
          .required('A senha é obrigatoria'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (data.password !== data.confpass) {
        toast.error('As senhas não são iguais');
      }

      const body = {
        email: data.email,
        password: data.password,
        name: data.name,
        document: removeMask(data.cpf),
        phone: data.phone,
      };

      api.post('user', body).then(() => {
        toast.success('Cadastro Realizado com sucesso');
        history.push('/');
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      } else {
        toast.error('Houve um erro ao realizar o cadastro!');
      }
    }
  }

  return (
    <div className="signup-content">
      <div className="signup-container">
        <div className="signup-logo">
          <img src={logo} alt="Logo" />
        </div>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="name" label="Nome Completo" autoComplete="off" />
          <Input
            name="cpf"
            label="Cpf"
            value={cpf}
            autoComplete="off"
            onChange={e => setCpf(cpfMask(e.target.value))}
          />
          <Input name="phone" label="Telefone" autoComplete="off" />

          <Input name="email" label="E-mail" autoComplete="off" />
          <div className="container-password">
            <Input
              name="password"
              label="Senha"
              autoComplete="off"
              type="password"
            />
            <Input
              name="confpass"
              label="Confirmar Senha"
              autoComplete="off"
              type="password"
            />
          </div>
          <br />
          <input
            type="submit"
            className="btn"
            value={loading ? 'Carregando...' : 'Cadastrar'}
          />
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
