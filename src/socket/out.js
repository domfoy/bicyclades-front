import {createProtoMessage} from './proto';

const outcomingActions = {
  addName: ({name}) => ({
    globalAction: 'CLIENT_ACTION',
    clientAction: {
      type: 'ADD_NAME',
      name
    }
  }),
  chat: (state, {payload: {content}}) => ({
    globalAction: 'CLIENT_ACTION',
    clientAction: {
      type: 'CHAT',
      name: state.game.player.name,
      actionChat: {
        message: content
      }
    }
  }),
  joinGame: () => ({
    globalAction: 'CLIENT_ACTION',
    clientAction: {
      type: 'JOIN_GAME'
    }
  })
};

export function sendMessage(state, sendToServer, action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      sendToServer(outcomingActions.chat(state, action));
      break;
    case 'JOIN_GAME':
      sendToServer(outcomingActions.joinGame());
      break;
    default:
      break;
  }
}

export function handleOpen(state, sendToServer) {
  sendToServer(outcomingActions.addName({name: state.game.player.name}));
  sendToServer(outcomingActions.joinGame());
}

export function sendToServerCreator(socket) {
  return (payload) => {
    if (socket.readyState === WebSocket.OPEN) {
      const buffer = createProtoMessage(payload);

      socket.send(buffer);
    } else {
      console.log('could not send message');
    }
  };
}
