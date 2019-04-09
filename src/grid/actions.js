/* eslint-disable no-param-reassign */

import produce from 'immer';

import {createActions, handleActions} from 'redux-actions';

const defaultState = [
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
];

export const actions = createActions({
  CONQUER_ISLE: ({id, colour}) => ({id, colour})
});

export const reducer = handleActions(
  {
    [actions.conquerIsle]: (state, {id, colour}) => produce(
      state,
      (draft) => {
        draft[id].player = colour;
      }
    )
  },
  defaultState
);

export default actions;
