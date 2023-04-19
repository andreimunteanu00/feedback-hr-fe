import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import feedbackReducer from "./feedbackReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  feedbacks: feedbackReducer,
  user: userReducer,
  form: formReducer,
});