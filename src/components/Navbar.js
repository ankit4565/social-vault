// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ walletAddress, connectWallet }) => (
  <div className="navbar">
    <span>📱 Social Vault</span>
    {walletAddress ? (
      <span className="wallet">{walletAddress}</span>
    ) : (
      <button onClick={connectWallet} className="btn btn-light">
        Connect Wallet
      </button>
    )}
  </div>
);

export default Navbar;
