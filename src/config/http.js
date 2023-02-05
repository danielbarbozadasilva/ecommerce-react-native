import axios from 'axios';
import {API_URL} from '@env';
import store from '../store';
import {logoutAction} from '../store/auth/auth.action';

const http = axios.create({baseURL: API_URL});

http.defaults.headers['content-type'] = 'application/json';

http.interceptors.response.use(
  response => response,
  error => {
    switch (error.response.status) {
      case 401:
        store.dispatch(logoutAction());
        return Promise.reject(error);

      default:
        return Promise.reject(error);
    }
  },
);

export default http;