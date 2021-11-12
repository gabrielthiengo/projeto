import axios from 'axios';

const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/',
  headers: {
    'content-type': 'application/json',
  },
});

export default api;
