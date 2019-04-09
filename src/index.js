import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';

import {PixiAppProvider, pixiApp} from './context';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <PixiAppProvider value={pixiApp}>
    <Provider store={store}>
      <App />
    </Provider>
  </PixiAppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
