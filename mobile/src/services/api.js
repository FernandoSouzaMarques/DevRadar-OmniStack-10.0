import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.10.18:4000'
});

export default api;