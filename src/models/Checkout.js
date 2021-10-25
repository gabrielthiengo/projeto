import moment from 'moment';

const CheckoutModel = {
  amount: 0,
  card_number: '',
  card_cvv: '',
  card_expiration_date: '',
  card_holder_name: '',
  portion_number: 1,
  external_id: '',
  customer_name: '',
  customer_type: 'individual',
  customer_country: 'br',
  customer_email: '',
  customer_document_type: 'cpf',
  customer_document_number: '',
  customer_phone_number: '',
  customer_birthday: '',
  billing_name: 'Casamentos.com',
  address_country: 'br',
  address_state: '',
  address_city: '',
  address_neighborhood: '',
  address_street: '',
  address_street_number: '',
  address_zipcode: '',
  item: '',
};

const verifyFields = model => {
  if (
    model.card_number === '' ||
    model.card_expiration_date === '' ||
    model.card_cvv === '' ||
    model.customer_name === '' ||
    model.customer_email === '' ||
    model.customer_document_number === '' ||
    model.customer_phone_number === '' ||
    model.customer_birthday === '' ||
    model.address_state === '' ||
    model.address_city === '' ||
    model.address_neighborhood === '' ||
    model.address_street === '' ||
    model.address_street_number === '' ||
    model.address_zipcode === ''
  ) {
    return {
      error: true,
      message: 'Preencha todos os campos obrigatórios',
    };
  }
  return { error: false, message: '' };
};

function replaceCheckoutModel(model) {
  model.card_number = model.card_number
    .replace(' ', '')
    .replace(' ', '')
    .replace(' ', '');
  model.card_expiration_date = model.card_expiration_date.replace('/', '');

  model.customer_birthday = moment(
    model.customer_birthday,
    'DD/MM/YYYY'
  ).format('YYYY-MM-DD');

  model.address_zipcode = model.address_zipcode
    .replace('.', '')
    .replace('-', '');

  model.customer_document_number = model.customer_document_number
    .replace('.', '')
    .replace('.', '')
    .replace('-', '');
  model.customer_phone_number = model.customer_phone_number
    .replace('(', '')
    .replace(')', '')
    .replace(' ', '')
    .replace(' ', '')
    .replace('-', '');

  return model;
}

export { CheckoutModel, verifyFields, replaceCheckoutModel };
