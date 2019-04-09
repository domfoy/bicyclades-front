import _ from 'lodash';

import gameActions from '../game';
import {createProtoMessage, parseProtoMessage} from './proto';

export default (url = 'ws://localhost:9002/ws') => (storeApi) => {
  const socket = new WebSocket(url);

  socket.binaryType = 'arraybuffer';

  socket.onopen = () => {
    console.log('Connected');
    storeApi.dispatch(gameActions.joinGame());
  };

  socket.onclose = () => {
    console.log('Closed');
    storeApi.dispatch({
      type: 'ACK_CLOSE_SOCKET',
      meta: {
        isSocket: true,
        direction: 'DOWN'
      }
    });
  };

  socket.onmessage = (evt) => {
    try {
      const object = parseProtoMessage(evt.data);
      console.log('Received from server', JSON.stringify(object, null, 2));
    } catch (err) {
      throw err;
    }
  };

  function sendToServer(payload) {
    if (socket.readyState === WebSocket.OPEN) {
      const buffer = createProtoMessage(payload);

      socket.send(buffer);
    } else {
      console.log('could not send message');
    }
  }

  return next => (action) => {
    if (_.get(action, 'meta.isSocket') && _.get(action, 'meta.direction') !== 'DOWN') {
      sendToServer(action.payload);
    }

    return next(action);
  };
};
