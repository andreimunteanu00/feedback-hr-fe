import {FETCH_FEEDBACKS, GET_FEEDBACK, GIVE_FEEDBACK} from '../actions/types';
import _ from 'lodash';

const feedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case GIVE_FEEDBACK:
      return {
        ...state,
      };
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: action.payload
      }
    case FETCH_FEEDBACKS:
      return {
        ...state,
        feedbacks: {..._.mapKeys(action.payload.content, 'id')},
        totalElements: action.payload.totalElements
      }
    default:
      return state;
  }
};

export default feedbackReducer;