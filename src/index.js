import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

import protobuf from 'protobufjs';

// const {Connection, Rstatus} = require('./bicyclade_pb.js');
// const {BycServerClient} = require('./bicyclade_grpc_web_pb.js');
//
// var client = new BycServerClient('http://localhost:8082');
//
// var request = new Connection();
// request.setIp('172.0.0.1');
// request.setPort('9090');

// client.connect(request, {}, (err, response) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(response.getTodo());
// });

const socket = new WebSocket("ws://localhost:9002/ws");

socket.binaryType = 'arraybuffer';
socket.onopen = function() {
  console.log('Connected');
};
socket.onclose = function() {
  console.log('Closed');
};

const root = protobuf.Root.fromJSON(require("./bundle.json"));

const Action = root.lookupType("bicyclade.Action");

function send(payload) {
  if (socket.readyState == WebSocket.OPEN) {
    const message = Action.create(payload);
    const buffer = Action.encode(payload).finish();

    socket.send(buffer);
  } else {
    console.log('could not send message');
  }
}

socket.onmessage = function(evt) {
    try {
      const buffer = new Uint8Array(evt.data);
      const message = Action.decode(buffer);
      const object = Action.toObject(message, {
        enums: String,  // enums as string names
        longs: String,  // longs as strings (requires long.js)
        bytes: String,  // bytes as base64 encoded strings
        defaults: true, // includes default values
        arrays: true,   // populates empty arrays (repeated fields) even if defaults=false
        objects: true,  // populates empty objects (map fields) even if defaults=false
        oneofs: true    // includes virtual oneof fields set to the present field's name
      });

      console.log('Received from server', JSON.stringify(object, null, 2));
    } catch (err) {
        throw err;
    }
};

socket.onopen = function() {
  send({
    message: 'Coucou xav !',
    valeur: 4
  });
}

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
