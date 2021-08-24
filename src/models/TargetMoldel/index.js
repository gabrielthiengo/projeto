import moment from 'moment';

export const TargetModel = {
  name: '',
  value: 0,
  type: '',
  start_date: '',
  end_date: '',
};

const verifyDates = (start, end) => {
  const currDate = moment(new Date(), 'DD/MM/YYYY');
  if (moment(start, 'DD/MM/YYYY').diff(currDate, 'days') < 0) {
    return {
      status: 'FAILURE',
      message: 'A Data início não pode ser menor que a data de hoje',
    };
  }

  if (moment(end, 'DD/MM/YYYY').diff(moment(start, 'DD/MM/YYYY'), 'days') < 0) {
    return {
      status: 'FAILURE',
      message: 'A Data conclusão não pode ser menor que a Data início',
    };
  }

  return {
    status: 'OK',
    message: '',
  };
};

export const verifyRequiredFieldsTarget = model => {
  if (
    model.name === '' ||
    model.value === 0 ||
    model.type === '' ||
    model.start_date === '' ||
    model.end_date === ''
  ) {
    return {
      status: 'FAILURE',
      message: 'Preencha todos os campos obrigatórios',
    };
  }

  const verifiedDates = verifyDates(model.start_date, model.end_date);

  if (verifiedDates.status === 'FAILURE') {
    return {
      status: 'FAILURE',
      message: verifiedDates.message,
    };
  }

  if (model.value <= 0) {
    return {
      status: 'FAILURE',
      message: 'O alvo da não é válido',
    };
  }

  return {
    status: 'OK',
    message: '',
  };
};
