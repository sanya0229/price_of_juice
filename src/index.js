import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Application entry point
 * Creates React root and renders the main App component
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// Performance monitoring - logs web vitals metrics
// Can be configured to send data to analytics services
reportWebVitals();
