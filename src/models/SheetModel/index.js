export const SheetModel = {
  id: 0,
  description: '',
  status: '',
  value: 0,
  observation: '',
  due_date: '',
  sheet_id: 0,
};

export const verifyRequiredFieldsSheet = model => {
  if (
    model.description === '' ||
    model.value === 0 ||
    model.due_date === '' ||
    model.status === ''
  ) {
    return {
      status: 'FAILURE',
      message: 'Preencha todos os campos obrigatórios',
    };
  }

  return {
    status: 'OK',
    message: '',
  };
};
