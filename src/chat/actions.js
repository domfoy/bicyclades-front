import {createActions, handleActions} from 'redux-actions';

const defaultState = {
  messages: []
};

export default createActions({
  SEND_MESSAGE: [
    message => ({
      author: 'me',
      content: message.data.text,
      timestamp: new Date()
    }),
    () => ({
      isSocket: true,
      direction: 'OUT'
    })
  ],
  RECEIVE_MESSAGE: ({author, content}) => ({
    author,
    content,
    timestamp: new Date()
  })
});

export const reducer = handleActions(
  {
    SEND_MESSAGE: (state, {payload: {author, content, timestamp}}) => {
      state.messages.push({
        author,
        content,
        timestamp
      });

      return {messages: state.messages};
    },
    RECEIVE_MESSAGE: (state, {payload: {author, content, timestamp}}) => {
      state.messages.push({
        author,
        content,
        timestamp
      });

      return {messages: state.messages};
    }
  },
  defaultState
);
