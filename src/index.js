import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import protobuf from 'protobufjs'; // eslint-disable-line import/no-extraneous-dependencies
import _ from 'lodash';

import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const socket = new WebSocket('ws://localhost:9002/ws');

socket.binaryType = 'arraybuffer';
socket.onopen = () => {
  console.log('Connected');
};
socket.onclose = () => {
  console.log('Closed');
};

const root = protobuf.Root.fromJSON(require('./bundle.json'));

const Action = root.lookupType('bicyclade.Action');

function send(payload) {
  if (socket.readyState === WebSocket.OPEN) {
    const buffer = Action.encode(payload).finish();

    socket.send(buffer);
  } else {
    console.log('could not send message');
  }
}

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

socket.onopen = () => {
  send({
    message: 'Coucou xav !',
    valeur: 4
  });
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
