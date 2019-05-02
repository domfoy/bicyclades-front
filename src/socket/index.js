import _ from 'lodash';

import {createProtoMessage} from './proto';
import parseMessage from './in';
import {sendMessage, handleOpen} from './out';

export default (url = 'ws://localhost:9002/ws') => (storeApi) => {
  const socket = new WebSocket(url);

  socket.binaryType = 'arraybuffer';

  function sendToServer(payload) {
    if (socket.readyState === WebSocket.OPEN) {
      console.log('about to send data to server');
      const buffer = createProtoMessage(payload);

      socket.send(buffer);
      console.log('message sent to server');
    } else {
      console.log('could not send message');
    }
  }

  socket.onopen = () => {
    console.log('Connected');
    const state = storeApi.getState();

    handleOpen(state, sendToServer);
  };

  socket.onclose = () => {
    console.log('Closed');
    storeApi.dispatch({
      type: 'ACK_CLOSE_SOCKET',
      meta: {
        isSocket: true,
        direction: 'IN'
      }
    });
  };

  socket.onmessage = (evt) => {
    const state = storeApi.getState();
    const action = parseMessage(state, evt.data);

    if (!action) {
      return;
    }
    console.log('Received from server', JSON.stringify(action, null, 2));
    storeApi.dispatch(action);
  };

  return next => (action) => {
    if (_.get(action, 'meta.isSocket') && _.get(action, 'meta.direction') === 'OUT') {
      const state = storeApi.getState();

      sendMessage(state, sendToServer, action);
    }

    return next(action);
  };
};
