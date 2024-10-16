// src/components/Dashboard.js
import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import MediaUploader from './MediaUploader';
import MediaPreview from './MediaPreview';

const Dashboard = ({ getBalance, tokenBalance }) => {
  const [messages, setMessages] = useState([]);
  const [uploadedMedia, setUploadedMedia] = useState(null);

  const sendMessage = (text) => {
    setMessages([...messages, { text, self: true }]);
  };

  const handleMediaUpload = (media) => {
    const newMessage = { text: '', media, self: true };
    setMessages([...messages, newMessage]);
    setUploadedMedia(media);
  };

  return (
    <div className="container">
      <ChatWindow messages={messages} />
      <MessageInput sendMessage={sendMessage} />
      <MediaUploader onUpload={handleMediaUpload} />
      {uploadedMedia && <MediaPreview media={uploadedMedia} />}

      <button
        className="btn btn-info mt-3"
        onClick={getBalance}
        style={{ width: '100%' }}
      >
        Check Token Balance
      </button>
      <p className="mt-2 text-center">Balance: {tokenBalance} VTKN</p>
    </div>
  );
};

export default Dashboard;
