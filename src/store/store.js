import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import monitoringReducer from '../features/monitoring/monitoringSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    monitoring: monitoringReducer,
  },
});

// TypeScript types (ignored in JS, but useful for TS projects)
export const RootState = store.getState;
export const AppDispatch = store.dispatch;