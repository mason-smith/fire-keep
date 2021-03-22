/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';

// Holidays
import { tasksApi } from 'src/features/Tasks/tasksService';

// Create an array of middlewares
// @ts-ignore
const middleware = [...getDefaultMiddleware({})] as const;

export const store = configureStore({
  reducer: {
    // Holidays
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: middleware.concat(tasksApi.middleware),
  devTools: import.meta.env.MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
