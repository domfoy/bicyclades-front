/* eslint-disable no-underscore-dangle */

import {createStore, applyMiddleware, compose} from 'redux';
import createSocketMiddleware from '../socket';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

export default createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware(createSocketMiddleware()))
);
