import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Input from '~components/Input';

import api from '~/services/api';

import history from '~/services/history';
import './styles.css';

function SignIn() {
  const formRef = useRef(null);
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(6, 'Insira seu nome completo')
          .required('Nome é obrigatório'),
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
      } else {
        const body = {
          email: data.email,
          password: data.password,
          full_name: data.name,
          phone: data.phone,
        };

        api.post('user', body).then(() => {
          toast.success(
            `Cadastro Realizado com sucesso! Uma confirmação foi enviada para o email ${data.email}`
          );
          history.push('/signin');
        });
      }
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
    <div className="wrapper-container">
      <div className="signup-container w3-animate-right">
        <div className="signup-content">
          <h2>Cadastre-se</h2>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input name="name" label="Nome Completo" autoComplete="off" />
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

            <div className="policy">
              <h4>
                Ao se registrar, você aceita nossos{' '}
                <strong>termos de uso</strong> e a nossa{' '}
                <strong>política de privacidade</strong>.
              </h4>
            </div>
            <input
              style={{ width: '100%' }}
              type="submit"
              className="btn-def"
              value={loading ? 'Carregando...' : 'Cadastrar'}
            />
          </Form>
        </div>
        <div className="signup-devstore">
          <header className="dev-header">
            <h1>DEVSTORE</h1>
          </header>
          <div className="dev-content">
            <h2>Cadastre-se para ficar por dentro de todas as novidades.</h2>

            <Link className="back" to="/signin">
              <FaLongArrowAltLeft size={20} />
              <h3>Voltar para login</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
