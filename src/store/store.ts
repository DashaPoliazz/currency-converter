import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { minfinApi } from './minfin/minfin.api';

export const store = configureStore({
  reducer: {
    [minfinApi.reducerPath]: minfinApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(minfinApi.middleware),
});
