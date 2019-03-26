import {createStore} from 'redux';
import * as Pixi from 'pixi.js';

import reducers from './reducers';

const MIN_WIDTH = 200;
const MIN_HEIGHT = 150;

const GOD_LIST = [
  'APPOLO',
  'ATHENA',
  'POSEIDON',
  'ZEUS'
];

const initialState = {
  app: new Pixi.Application({
    width: window.innerWidth < MIN_WIDTH ? MIN_WIDTH : window.innerWidth,
    height: window.innerHeight < MIN_HEIGHT ? MIN_HEIGHT : window.innerHeight
  }),
  isles: [
    {
      player: null,
      tiles: [
        [1, 2],
        [2, 3],
        [3, 4]
      ]
    },
    {
      player: null,
      tiles: [
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1]
      ]
    },
    {
      player: null,
      tiles: [
        [5, 3]
      ]
    },
    {
      player: null,
      tiles: [
        [5, 5],
        [5, 6],
        [6, 6]
      ]
    },
    {
      player: null,
      tiles: [
        [7, 2]
      ]
    },
    {
      player: null,
      tiles: [
        [7, 4],
        [8, 5],
      ]
    },
    {
      player: null,
      tiles: [
        [9, 1],
        [9, 2],
      ]
    },
    {
      player: null,
      tiles: [
        [10, 3]
      ]
    }
  ],
  gods: [
    {
      id: 1,
      type: GOD_LIST[0]
    },
    {
      id: 2,
      type: GOD_LIST[1]
    },
    {
      id: 3,
      type: GOD_LIST[3]
    },
    {
      id: 4,
      type: GOD_LIST[4]
    },
    {
      id: 5,
      type: 'APOLLO'
    }
  ]
};

export default createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
);
