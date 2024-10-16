// src/components/MediaPreview.js
import React from 'react';

const MediaPreview = ({ media }) => {
  const mediaType = media.type.split('/')[0];

  return (
    <div>
      {mediaType === 'image' && <img src={URL.createObjectURL(media)} alt="preview" width="100%" />}
      {mediaType === 'video' && (
        <video controls width="100%">
          <source src={URL.createObjectURL(media)} />
        </video>
      )}
      {mediaType === 'audio' && (
        <audio controls>
          <source src={URL.createObjectURL(media)} />
        </audio>
      )}
    </div>
  );
};

export default MediaPreview;
