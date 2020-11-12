import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FaUser, FaLock } from 'react-icons/fa';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import './styles.css';
import Wave from '~assets/images/wave.png';
import Logo from '~assets/images/Logotipo.svg';
import LoginImage from '~assets/images/login-image.svg';
import InputLogin from '~components/InputLogin';

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
    <div className="main-container">
      <img src={Wave} alt="" className="wave" />
      <div className="container">
        <div className="img">
          <img src={LoginImage} alt="" />
        </div>

        <div className="login-content">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <img className="login-avatar" src={Logo} alt="" />
            <InputLogin
              id="mail"
              label="Email"
              name="email"
              icon={<FaUser />}
            />
            <InputLogin
              id="senha"
              label="Senha"
              type="password"
              name="password"
              icon={<FaLock />}
            />

            <Link to="/recovery">Esqueceu a Senha?</Link>
            <input
              type="submit"
              className="btn"
              value={loading ? 'Carregando...' : 'Acessar'}
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
