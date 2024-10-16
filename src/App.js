// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserProvider, Contract, formatEther } from 'ethers';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import VaultTokenABI from './VaultTokenABI.json';
import ChatWindow from './components/ChatWindow';

import './styles/App.css';

const CONTRACT_ADDRESS = 'your-deployed-contract-address';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [contract, setContract] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      setWalletAddress(accounts[0]);

      const tokenContract = new Contract(CONTRACT_ADDRESS, VaultTokenABI, signer);
      setContract(tokenContract);
    } else {
      alert('Please install MetaMask!');
    }
  };

  const getBalance = async () => {
    if (contract) {
      const balance = await contract.balanceOf(walletAddress);
      setTokenBalance(formatEther(balance));
    }
  };

  useEffect(() => {
    if (window.ethereum) connectWallet();
  }, []);

  return (
    <div>
      <Navbar walletAddress={walletAddress} connectWallet={connectWallet} />
      <Dashboard getBalance={getBalance} tokenBalance={tokenBalance} />
    </div>
  );
}

export default App;
