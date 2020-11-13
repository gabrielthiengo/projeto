export const numberOfLine = string => {
  if (string !== null) {
    if (string.length > 255) {
      string = `${string.substr(0, 255)}...`;
    }
  }

  return string;
};

export const formatDate = date => {
  const newDate = new Date(date);

  const year = newDate.getFullYear();
  const month = `00${newDate.getMonth() + 1}`.slice(-2);
  const day = `00${newDate.getDate()}`.slice(-2);

  return `${day}/${month}/${year}`;
};

export const cpfMask = value => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const removeMask = value => {
  return value
    .replace('.', '')
    .replace('.', '')
    .replace('-', '');
};
