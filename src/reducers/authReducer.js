import { LOGIN, CHECK_LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        resetPassword: action.payload.resetPassword,
        user: action.payload,
      };
    case CHECK_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        resetPassword: action.payload.resetPassword,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        resetPassword: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;