import moment from 'moment';

export const ActivityModel = {
  title: '',
  description: '',
  user_destination_id: 0,
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

export const verifyRequiredFieldsActivity = model => {
  if (
    model.title === '' ||
    model.description === '' ||
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

  return {
    status: 'OK',
    message: '',
  };
};
