import _ from 'lodash';

import {actions as chatActions} from '../chat';
import {actions as gameActions} from '../game';
import {parseProtoMessage} from './proto';

function parseClientAction(state, action) {
  console.log(JSON.stringify(action));
  switch (_.get(action, 'type')) {
    case 'CHAT':
      if (action.name && state.game.player.name !== action.name) {
        return chatActions.receiveMessage({
          author: action.name,
          content: action.actionChat.message
        });
      }
      return undefined;
    default:
      return undefined;
  }
}

function parseServerAction(state, action) {
  console.log(JSON.stringify(action));
  switch (_.get(action, 'type')) {
    case 'START_GAME':
      return gameActions.start({
        playerList: action.playerList
      });
    default:
      return undefined;
  }
}

export function parsePayload(state, data) {
  const obj = parseProtoMessage(data);

  if (!obj) {
    return undefined;
  }

  switch (obj.globalAction) {
    case 'CLIENT_ACTION':
      return parseClientAction(state, _.get(obj, 'clientAction'));
    case 'SERVER_ACTION':
      return parseServerAction(state, _.get(obj, 'serverAction'));
    default:
      return undefined;
  }
}

export default function parseMessage(state, action) {
  const withoutMeta = parsePayload(state, action);

  if (!withoutMeta) {
    return undefined;
  }

  const meta = {
    isSocket: true,
    direction: 'IN'
  };

  return Object.assign(withoutMeta, {meta});
}
