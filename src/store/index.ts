import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import rootReducer from './root-reducer';

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve<null>(null);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setItem(value: any) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  // Add this line to use synchronous storage implementation
  // instead of the default asynchronous implementation
  // Note: This might impact performance, so use it with caution
  // Refer to the `redux-persist` documentation for more information
  // about storage configuration options
  throttle: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
