import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// TypeScript types (ignored in JS, but useful for TS projects)
export const RootState = store.getState;
export const AppDispatch = store.dispatch;