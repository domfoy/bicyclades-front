import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Launcher} from 'react-chat-window';

import actions from './actions';

function Chat({messageList, onMessageSent}) {
  return (
    <div>
      <Launcher
        agentProfile={{
          teamName: 'react-live-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={onMessageSent}
        messageList={messageList}
        showEmoji
      />
    </div>
  );
}

Chat.propTypes = {
  messageList: PropTypes.array.isRequired,
  onMessageSent: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const messageList = _.map(state.chat.messages, ({author, content}) => ({
    author,
    data: {text: content},
    type: 'text'
  }));

  return {
    messageList
  };
};


const mapDispatchToProps = {
  onMessageSent: actions.sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
