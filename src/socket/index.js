import _ from 'lodash';

// import gameActions from '../game';
import {createProtoMessage, parseProtoMessage} from './proto';

export default (url = 'ws://localhost:9002/ws') => (storeApi) => {
  const socket1 = new WebSocket(url);

  socket1.binaryType = 'arraybuffer';

  function sendToServer(socket, payload) {
    if (socket.readyState === WebSocket.OPEN) {
      console.log('about to send data to server');
      const buffer = createProtoMessage(payload);

      socket.send(buffer);
      console.log('message sent to server');
    } else {
      console.log('could not send message');
    }
  }

  socket1.onopen = () => {
    console.log('Connected');
    // storeApi.dispatch(gameActions.joinGame());
    sendToServer(socket1, {
      globalAction: 'CLIENT_ACTION',
      clientAction: {
        type: 'ADD_NAME',
        name: 'p1'
      }
    });
    // socket.close();
  };

  socket1.onclose = () => {
    console.log('Closed');
    storeApi.dispatch({
      type: 'ACK_CLOSE_SOCKET',
      meta: {
        isSocket: true,
        direction: 'DOWN'
      }
    });
  };

  socket1.onmessage = (evt) => {
    try {
      const object = parseProtoMessage(evt.data);
      console.log('Received from server for p1', JSON.stringify(object, null, 2));
    } catch (err) {
      throw err;
    }
  };

  return next => (action) => {
    if (_.get(action, 'meta.isSocket') && _.get(action, 'meta.direction') !== 'DOWN') {
      sendToServer(action.payload);
    }

    return next(action);
  };
};
