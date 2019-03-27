import {createStore} from 'redux';
import * as Pixi from 'pixi.js';


import {
  COLOUR,
  GOD,
  MIN_HEIGHT,
  MIN_WIDTH,
  TURN_STEP,
} from './constants';
import reducers from './reducers';

const initialState = {
  app: new Pixi.Application({
    width: window.innerWidth < MIN_WIDTH ? MIN_WIDTH : window.innerWidth,
    height: window.innerHeight < MIN_HEIGHT ? MIN_HEIGHT : window.innerHeight
  }),
  turn: {
    colour: COLOUR.RED,
    step: TURN_STEP,
    id: 1
  },
  offerings: [
    {
      colour: COLOUR.RED,
      id: 1,
      order: 1
    },
    {
      colour: COLOUR.BLUE,
      id: 1,
      order: 2
    },
    {
      colour: COLOUR.YELLOW,
      id: 1,
      order: 3
    }
  ],
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
      position: 1,
      type: GOD.ARES
    },
    {
      id: 2,
      position: 2,
      type: GOD.ATHENA
    },
    {
      id: 3,
      position: 3,
      type: GOD.POSEIDON
    },
    {
      id: 4,
      type: GOD.ZEUS
    },
    {
      id: 5,
      position: 4,
      type: GOD.APPOLLO
    }
  ]
};

export default createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
);
