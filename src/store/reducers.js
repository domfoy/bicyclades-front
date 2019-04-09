import {combineReducers} from 'redux';

import {reducer as chat} from '../chat';
import {reducer as game} from '../game';
import {reducer as gods} from '../gods';
import {reducer as isles} from '../grid';
import {reducer as offerings} from '../offering-marker-stack';

export default combineReducers({
  chat,
  game,
  gods,
  isles,
  offerings
});
