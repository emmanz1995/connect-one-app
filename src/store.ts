import { configureStore, Tuple } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authSlice from './feature/auth/authSlice';
import {GetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const store = configureStore({
  reducer: {
    auth: authSlice
  },
  devTools: true,
  // middleware: (getDefaultMiddleware: GetDefaultMiddleware) => new Tuple().concat(logger)
})

export default store;