import axios from 'axios';

const api = axios.create({
  baseURL: 'https://e-motor-api.vercel.app/',
});

export default api;
