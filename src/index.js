import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //provider is used from the redux toolkit and it is used for the providing the store in the app component // and store is help to acces and action of the store
  <Provider store={store}>
  <App />
  </Provider>
);

