/* eslint-disable no-param-reassign */

import produce from 'immer';

import {createActions, handleActions} from 'redux-actions';
import {
  GOD
} from '../constants';

const defaultState = [
  {
    type: GOD.ARES
  },
  {
    type: GOD.ATHENA
  },
  {
    type: GOD.POSEIDON
  },
  {
    type: GOD.APPOLLO
  }
];

export const actions = createActions({
  DRAW_GODS: ({gods}) => ({gods})
});

export const reducer = handleActions(
  {
    [actions.drawGods]: (state, {gods}) => produce(
      state,
      (draft) => {
        gods.forEach((god, index) => {
          draft[index].type = god;
        });
      }
    )
  },
  defaultState
);

export default actions;
