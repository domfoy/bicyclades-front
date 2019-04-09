import {combineReducers} from 'redux';

import {reducer as chat} from '../chat';
import {reducer as game} from '../game';

export default combineReducers({
  chat,
  game
});
