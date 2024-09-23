import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; /* Το δικό σου CSS αρχείο */
import 'bootstrap/dist/css/bootstrap.min.css'; /* Bootstrap CSS */
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
