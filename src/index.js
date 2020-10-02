import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


