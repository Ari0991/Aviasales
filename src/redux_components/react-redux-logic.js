import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import { checkItem } from '../redux_components/actions/actions.js';
import { store } from '../redux_components/store/store.js';
import App from '../components/App/App.js';

const container = document.getElementById('root');
const root = createRoot(container);

const { dispatch, subscribe } = store;
export const { incDispatch, decDispatch, checkDispatch } = bindActionCreators(
  {
    checkDispatch: checkItem,
  },

  dispatch
);

const update = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

update();
subscribe(update);
