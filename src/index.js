import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { StateContextProvider } from './contexts/StateContextProvider';
import './global.css';
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
      <Router>
        <App />
      </Router>
    </StateContextProvider>
  </React.StrictMode>
);