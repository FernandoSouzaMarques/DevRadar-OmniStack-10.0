import axios from 'axios';
import { baseURL } from '../utils/config';

const api = axios.create({
  baseURL
});

export default api;