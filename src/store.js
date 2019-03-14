import {createStore} from 'redux';
import reducers from './reducers';

import * as Pixi from 'pixi.js';

const initialState = {
  app: new Pixi.Application(window.innerWidth, window.innerHeight)
};

export default createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
