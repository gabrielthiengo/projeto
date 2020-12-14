import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FaUser, FaLock, FaLongArrowAltLeft } from 'react-icons/fa';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import './styles.css';
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
    <div className="wrapper-container">
      <div className="login-container w3-animate-left">
        <div className="devstore">
          <header className="dev-header">
            <h1>DEVSTORE</h1>
          </header>
          <div className="dev-content">
            <h2>
              Faça login ou cadastre-se para ficar por dentro de todas as
              novidades.
            </h2>
          </div>
        </div>
        <div className="login-content">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div className="arrow-back">
              <Link to="/">
                <FaLongArrowAltLeft size={20} />
                <h3>Voltar para home</h3>
              </Link>
            </div>
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
            <Link className="recovery-pass a" to="/recovery">
              Esqueceu a Senha?
            </Link>
            <br />

            <input
              style={{ width: '100%' }}
              type="submit"
              className="btn-def"
              value={loading ? 'Carregando...' : 'Acessar'}
            />

            <br />

            <div className="signup">
              Novo por aqui?
              <Link className="a" to="/register">
                Cadastre-se
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
