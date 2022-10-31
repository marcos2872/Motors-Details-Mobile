import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_APP_URL_MOTORS,
});

export default api;
