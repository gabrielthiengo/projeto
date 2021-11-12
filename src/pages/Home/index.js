import React, { useState } from 'react';

import Container from '~/components/Container';
import Register from '~/components/Register';

import './styles.css';

function Home() {
  const [currStep, setCurrStep] = useState(1);

  function nextStep() {
    setCurrStep(currStep + 1);
  }

  function previousStep() {
    setCurrStep(currStep - 1);
  }

  function handleSubmit() {
    setCurrStep(1);
  }

  return (
    <div className="home-content text-focus-in">
      {currStep === 1 && (
        <Container>
          <header>
            <h2>Olá, pronto para começar?</h2>
          </header>

          <button type="button" onClick={nextStep}>
            Começar
          </button>
        </Container>
      )}

      {currStep === 2 && (
        <Register previous={previousStep} finishForm={handleSubmit} />
      )}
    </div>
  );
}

export default Home;
