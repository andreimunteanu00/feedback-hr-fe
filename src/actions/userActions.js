import api from '../apis/backend';
import {CREATE_USER, FETCH_FEEDBACKS, GET_USER, RESET_PASSWORD} from "./types";

export const createUser = (email) => async dispatch => {
  await api.post(`/user/create/${email}`);

  dispatch({ type: CREATE_USER });
};

export const getCurrentUser = () => async dispatch => {
  const res = await api.get(`/user/current-user`);

  dispatch({ type: GET_USER, payload: res.data });
}

export const fetchUsers = (email, page=0, size=10) => async dispatch => {
  const response = await api.get(`/user?email=${email}&page=${page}&size=${size}`);

  dispatch({ type: FETCH_FEEDBACKS, payload: response.data });
}

export const resetPassword = (password) => async dispatch => {
  await api.put('/user/reset-password', { password });

  dispatch({ type: RESET_PASSWORD})
}
