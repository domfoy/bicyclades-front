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
  })
};

export function sendMessage(state, sendToServer, action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      sendToServer(outcomingActions.chat(state, action));
      break;
    default:
      break;
  }
}

export function handleOpen(state, sendToServer) {
  sendToServer(outcomingActions.addName({name: state.game.player.name}));
}
