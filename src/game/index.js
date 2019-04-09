import {createActions, handleActions} from 'redux-actions';

import {
  COLOUR,
  TURN_STEP,
} from '../constants';

const defaultState = {
  player: {
    name: 'Unknown Player'
  },
  turn: {
    colour: COLOUR.RED,
    step: TURN_STEP,
    id: 1
  }
};

export const actions = createActions({
  SET_NAME: name => ({name})
});

export const reducer = handleActions(
  {
    [actions.setName]: (state, {name}) => ({...state, player: {name}})
  },
  defaultState
);

export default actions;
