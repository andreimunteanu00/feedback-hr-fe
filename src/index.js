import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {configureStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from './reducers'

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: true,
});

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App/>
  </Provider>
);