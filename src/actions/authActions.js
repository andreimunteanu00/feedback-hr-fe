import api from '../apis/backend';
import {CHECK_LOGIN, LOGIN, LOGOUT} from "./types";
import jwt_decode from 'jwt-decode';
import history from '../history';

export const login = (email, password) => async dispatch => {
  const res = await api.post('/auth/login', { email, password });
  window.localStorage.setItem('token', res.data);
  const decoded = jwt_decode(res.data);

  dispatch({ type: LOGIN, payload: decoded });
  history.push('/')
};

export const checkLogin = (decodedToken) => dispatch => {
  dispatch({ type: CHECK_LOGIN, payload: decodedToken})
}

export const logout = () => async dispatch => {
  await api.get('/auth/logout')
  window.localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
  window.location.href = '/';
};