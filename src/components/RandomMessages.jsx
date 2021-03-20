import React from 'react';
import PropTypes from 'prop-types';

export default function RandomMessages({ messages }) {
  return (
    <>
      <h2>Messages</h2>
      {messages.map((message, i) =>
        // TODO: format as cards, add timestamp

        <p key={i} className={message.premium ? 'is-premium' : ''}>
          <strong>{message.sender}</strong>:<br/>
          {message.text.length}
        </p>
      )}
    </>
  );
}

RandomMessages.propTypes = {
  messages: PropTypes.array
};
