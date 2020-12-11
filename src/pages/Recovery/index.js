import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FaLongArrowAltLeft } from 'react-icons/fa';
import Input from '~/components/Input';

import './styles.css';

function Recovery() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    if (data.email === '' || data.email.indexOf('@') === -1) {
      toast.error('Insira um email válido');
    } else {
      toast.success('Um email foi enviado, verifique sua caixa de entrada.');
    }
  }

  return (
    <div className="wrapper-container">
      <div className="container w3-animate-bottom">
        <div className="recovery-container">
          <div style={{ width: '100%', textAlign: 'left' }}>
            <Link to="/signin">
              <FaLongArrowAltLeft size={20} />
              Voltar para login
            </Link>
          </div>

          <h2>Recuperação de Senha:</h2>

          <hr />

          <br />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" label="Digite seu e-mail" autoComplete="off" />
            <input type="submit" className="btn-def" value="Enviar Email" />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
