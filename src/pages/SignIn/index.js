import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FaUser, FaLock } from 'react-icons/fa';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import './styles.css';
import InputLogin from '~components/InputLogin';
import logo from '~/assets/images/logos/text.png';

function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um email valido!')
          .required('O email é obrigatorio'),
        password: Yup.string()
          .min(6, 'Mínimo 6 caracteres')
          .required('A senha é obrigatoria'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signInRequest(data.email, data.password));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <div className="wrapper-container">
      <div className="login-container">
        <div className="login-content w3-animate-left">
          <img src={logo} alt="logotipo" />
          <br />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputLogin
              id="mail"
              label="Email"
              name="email"
              icon={<FaUser size={15} />}
            />
            <InputLogin
              id="senha"
              label="Senha"
              type="password"
              name="password"
              icon={<FaLock size={15} />}
            />
            <Link className="recovery-pass" to="/recovery">
              Esqueceu a Senha?
            </Link>
            <br />
            <br />

            <input
              style={{ width: '100%' }}
              type="submit"
              className="btn-def"
              value={loading ? 'Carregando...' : 'Acessar'}
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
