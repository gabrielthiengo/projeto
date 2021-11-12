const User = {
  name: '',
  lastName: '',
  country: 'select',
  zipCode: '',
  address: '',
  number: '',
  city: '',
  musicStyle: [],
  os: '',
  rating: '0',
};

function verifyPersonal(user) {
  if (user.name === '' || user.lastName === '') {
    return {
      error: true,
      message: 'Preencha todos os campos',
    };
  }

  return {
    error: false,
    message: '',
  };
}

function verifyAddress(user) {
  if (
    user.zipCode === '' ||
    user.address === '' ||
    user.country === 'select' ||
    user.city === '' ||
    user.number === ''
  ) {
    return {
      error: true,
      message: 'Preencha todos os campos',
    };
  }

  return {
    error: false,
    message: '',
  };
}

export { User, verifyPersonal, verifyAddress };
