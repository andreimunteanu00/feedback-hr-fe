import axios from 'axios';

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
)

export default api;