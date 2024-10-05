import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CommunityProvider } from './context/CommunityContext';
import './assets/styles/global.css'; // Corrected path

ReactDOM.render(
  <React.StrictMode>
    <CommunityProvider>
      <App />
    </CommunityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
