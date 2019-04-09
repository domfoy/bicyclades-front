/* eslint-disable no-param-reassign */

import _ from 'lodash';
import produce from 'immer';

import {createActions, handleActions} from 'redux-actions';
import {
  COLOUR
} from '../constants';

const defaultState = [
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
];

export const actions = createActions({
  SET_BID: ({colour, id, bid, godSpot}) => ({colour, id, bid, godSpot})
});

export const reducer = handleActions(
  {
    [actions.setBid]: (state, {colour, id, bid, godSpot}) => produce(
      state,
      (draft) => {
        const newOccupantIndex = _.findIndex(state, {colour, id});
        const previousOccupantIndex = _.findIndex(state, {godSpot});
        if (previousOccupantIndex) {
          draft[previousOccupantIndex].godSpot = null;
          draft[previousOccupantIndex].bid = null;
        }

        draft[newOccupantIndex].godSpot = godSpot;
        draft[newOccupantIndex].bid = bid;
      }
    )
  },
  defaultState
);

export default actions;
