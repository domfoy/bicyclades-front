import {createActions, handleActions} from 'redux-actions';

const defaultState = {
  name: 'Unknown Player'
};

export const actions = createActions({
  ACK_JOIN_GAME: null,
  JOIN_GAME: null,
  SET_NAME: name => ({name})
});

export const reducer = handleActions(
  {
    JOIN_GAME: [
      (state, {name}) => ({name}),
      () => ({isSocket: true})
    ],
    SET_NAME: (state, {name}) => ({name})
  },
  defaultState
);

export default actions;
