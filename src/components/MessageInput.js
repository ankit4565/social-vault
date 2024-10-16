// src/components/MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ flex: 1, padding: '10px', borderRadius: '5px' }}
      />
      <button onClick={handleSend} style={{ marginLeft: '10px' }}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
