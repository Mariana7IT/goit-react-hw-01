import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App';
import Profile from './components/Profile';
import TransactionHistory from './components/TransactionHistory';
import FriendList from './components/FriendList';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Profile />
    <FriendList /> 
    <TransactionHistory /> 
  </>,);
