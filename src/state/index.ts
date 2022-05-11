import { configureStore } from '@reduxjs/toolkit';
import { windowSlice } from './reducers';

const store = configureStore({
  reducer: {
    window: windowSlice.reducer,
  },
  devTools: true,
  middleware: [],
  enhancers: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
