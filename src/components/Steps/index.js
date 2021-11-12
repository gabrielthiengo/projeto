import React from 'react';
import PropTypes from 'prop-types';

import { FaCheck } from 'react-icons/fa';

import StepItem from '~/components/StepItem';

import './styles.css';

function Steps({ step }) {
  return (
    <div className="steps-content">
      <StepItem
        title="Dados Pessoais"
        subTitle="Preencha os campos com seus dados pessoais."
        isCheck={step === 0}
        isPast={step > 0}
        stepNumber={1}
        icon={<FaCheck />}
      />
      <StepItem
        title="Endereço"
        subTitle="Preencha os campos com seu endereço."
        isCheck={step === 1}
        isPast={step > 1}
        stepNumber={2}
        icon={<FaCheck />}
      />
      <StepItem
        title="Preferência musical"
        subTitle="Selecione um ou mais estilos músicais."
        isCheck={step === 2}
        isPast={step > 2}
        stepNumber={3}
        icon={<FaCheck />}
      />
      <StepItem
        title="Sistema operacional"
        subTitle="Selecione qual sistema operacional você utiliza."
        isCheck={step === 3}
        isPast={step > 3}
        stepNumber={4}
        icon={<FaCheck />}
      />
      <StepItem
        title="Satisfação"
        subTitle="Selecione qual seu nível de satisfação."
        isCheck={step === 4}
        isPast={step > 4}
        stepNumber={5}
        icon={<FaCheck />}
      />
    </div>
  );
}

export default Steps;

Steps.propTypes = {
  step: PropTypes.number.isRequired,
};
