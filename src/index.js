import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
