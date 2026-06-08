import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import reduxStore from './store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={reduxStore}><App /></Provider>); // Store value importing the store created with redux for the react-redux library
