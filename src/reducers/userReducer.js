import {CREATE_USER, GET_USER, RESET_PASSWORD} from '../actions/types';

const initialState = {
  feedback: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
      };
    case GET_USER:
      return {
        ...state,
        [action.payload.userEmail]: action.payload
      }
    case RESET_PASSWORD:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;