import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reducers/reducer.js';

const Store = configureStore({
  reducer: {
    api: apiReducer,
    // more reducers here
  },
});

export default Store;
