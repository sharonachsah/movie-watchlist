import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import moviesReducer from './redux/reducers';
import App from './App'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'

const store = createStore(
  moviesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
