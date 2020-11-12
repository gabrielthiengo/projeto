export const numberOfLine = string => {
  if (string.length > 255) {
    string = `${string.substr(0, 255)}...`;
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
