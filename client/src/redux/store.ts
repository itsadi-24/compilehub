import { configureStore } from '@reduxjs/toolkit';
import compilerSlice from './slices/compilerSlice';
import { api } from './slices/api';

export const store = configureStore({
  reducer: {
    compilerSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
