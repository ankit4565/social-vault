// src/components/ChatWindow.js
import React from 'react';
import './ChatWindow.css';

const ChatWindow = ({ messages }) => (
  <div className="chat-window">
    {messages.map((msg, index) => (
      <div key={index} className={`message ${msg.self ? 'self' : ''}`}>
        {msg.text && <p>{msg.text}</p>}
        {msg.media && (
          <div className="media-preview">
            {msg.media.type.startsWith('image/') && (
              <img src={URL.createObjectURL(msg.media)} alt="preview" />
            )}
            {msg.media.type.startsWith('video/') && (
              <video controls>
                <source src={URL.createObjectURL(msg.media)} />
              </video>
            )}
            {msg.media.type.startsWith('audio/') && (
              <audio controls>
                <source src={URL.createObjectURL(msg.media)} />
              </audio>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default ChatWindow;
