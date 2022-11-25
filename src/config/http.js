import axios from 'axios';
import {API_URL} from '@env';

const http = axios.create({baseURL: `${API_URL}`});

http.defaults.headers['content-type'] = 'application/json';

http.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);

export default http;
