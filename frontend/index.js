/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application
 *
 * ************************************
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './App.scss';
import store from './store';

const root = createRoot(document.getElementById('app'));

root.render(
    // wrap the App in the Provider Component and pass in the store
    <Provider store={store}><App /></Provider>
  );
