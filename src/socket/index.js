import _ from 'lodash';
import protobuf from 'protobufjs'; // eslint-disable-line import/no-extraneous-dependencies

import gameActions from '../game';

const root = protobuf.Root.fromJSON(require('./proto/bundle.json'));

const Action = root.lookupType('bicyclade.Action');

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
      let buffer;
      if (_.isString(evt.data)) {
        buffer = new TextEncoder().encode(evt.data);
      } else {
        buffer = new Uint8Array(evt.data);
      }
      const message = Action.decode(buffer);
      const object = Action.toObject(message, {
        enums: String, // enums as string names
        longs: String, // longs as strings (requires long.js)
        bytes: String, // bytes as base64 encoded strings
        defaults: true, // includes default values
        arrays: true, // populates empty arrays (repeated fields) even if defaults=false
        objects: true, // populates empty objects (map fields) even if defaults=false
        oneofs: true // includes virtual oneof fields set to the present field's name
      });

      console.log('Received from server', JSON.stringify(object, null, 2));
    } catch (err) {
      throw err;
    }
  };

  function sendToServer(payload) {
    if (socket.readyState === WebSocket.OPEN) {
      const buffer = Action.encode(payload).finish();

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
