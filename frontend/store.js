/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reducers/reducer.js';

const store = configureStore({
  reducer: {
    api: apiReducer,
    // more reducers here
  },
});

export default store;
