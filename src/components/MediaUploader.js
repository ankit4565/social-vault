// src/components/MediaUploader.js
import React, { useState } from 'react';
import './MediaUploader.css';

const MediaUploader = ({ onUpload }) => {
  const [media, setMedia] = useState(null);

  const handleFileChange = (event) => {
    setMedia(event.target.files[0]);
  };

  const handleUpload = () => {
    if (media) {
      onUpload(media);
      setMedia(null);
    }
  };

  return (
    <div className="media-uploader">
      <input
        type="file"
        accept="image/*,video/*,.mp3"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default MediaUploader;
