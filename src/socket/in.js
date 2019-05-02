import _ from 'lodash';

import {actions as chatActions} from '../chat';
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

export function parsePayload(state, data) {
  const obj = parseProtoMessage(data);

  if (!obj) {
    return undefined;
  }

  switch (obj.globalAction) {
    case 'CLIENT_ACTION':
      return parseClientAction(state, _.get(obj, 'clientAction'));
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
