import {createActions, handleActions} from 'redux-actions';

const defaultState = {
  messages: []
};

export default createActions({
  SEND_MESSAGE: message => ({
    content: message,
    timestamp: new Date()
  })
});

export const reducer = handleActions(
  {
    SEND_MESSAGE: (state, {content, timestamp}) => {
      state.messages.push({
        content,
        timestamp
      });

      return {messages: state.messages};
    }
  },
  defaultState
);
