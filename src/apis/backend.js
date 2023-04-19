import axios from 'axios';
import Swal from "sweetalert2";

let api = axios.create({
  baseURL: 'http://localhost:8081/api'
});

api.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    Promise.reject(error)
  }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 400:
          Swal.fire({
            title: 'Error',
            text: 'Bad request',
            icon: 'error'
          });
          break;
        case 401:
          Swal.fire({
            title: 'Error',
            text: 'Unauthorized',
            icon: 'error'
          });
          break;
        case 403:
          Swal.fire({
            title: 'Error',
            text: 'Forbidden',
            icon: 'error'
          });
          break;
        case 404:
          Swal.fire({
            title: 'Error',
            text: 'Not found',
            icon: 'error'
          });
          break;
        case 500:
          Swal.fire({
            title: 'Error',
            text: 'Internal server error',
            icon: 'error'
          });
          break;
        default:
          Swal.fire({
            title: 'Error',
            text: 'Something went wrong',
            icon: 'error'
          });
      }
    }
    return Promise.reject(error);
  }
);

export default api;