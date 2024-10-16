// src/ipfsService.js
import axios from 'axios';

const PINATA_API_KEY = 'your-pinata-api-key';
const PINATA_SECRET_API_KEY = 'your-pinata-secret-api-key';

export const uploadToIPFS = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
    maxContentLength: 'Infinity',
    headers: {
      'Content-Type': 'multipart/form-data',
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_API_KEY,
    },
  });

  return response.data.IpfsHash;
};
