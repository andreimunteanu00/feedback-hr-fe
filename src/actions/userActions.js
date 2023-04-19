import api from '../apis/backend';
import {CREATE_USER, GET_USER, RESET_PASSWORD} from "./types";

export const createUser = (email) => async dispatch => {
  await api.post(`/user/create/${email}`);

  dispatch({ type: CREATE_USER });
};

export const getUser = (email) => async dispatch => {
  const res = await api.get(`/user/${email}`);

  dispatch({ type: GET_USER, payload: res.data });
}

export const resetPassword = (password) => async dispatch => {
  await api.put('/user/reset-password', { password });

  dispatch({ type: RESET_PASSWORD})
}
