import api from '../apis/backend';
import {FETCH_FEEDBACKS, GET_FEEDBACK, GIVE_FEEDBACK} from "./types";

export const createFeedback = (subject, message, isAnonymous=false) => async dispatch => {
  await api.post('/feedback/create', { subject, message, isAnonymous });

  dispatch({ type: GIVE_FEEDBACK });
};

export const getFeedback = (id) => async dispatch => {
  const res = await api.get(`/feedback/${id}`);

  dispatch({ type: GET_FEEDBACK, payload: res.data})
}

export const fetchFeedbacks = (email, page=0, size=10) => async dispatch => {
  const response = await api.get(`/feedback?email=${email}&page=${page}&size=${size}`);

  dispatch({ type: FETCH_FEEDBACKS, payload: response.data });
};