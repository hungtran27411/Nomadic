import React from 'react';

import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';

import { thunk } from 'redux-thunk';
import reducers from './reducers';
import 'antd/dist/reset.css';
import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
