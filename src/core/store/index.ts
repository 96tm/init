import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  createMigrate,
  PersistConfig,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rtkQueryErrorLogger } from './middleware/rtkQueryErrorLogger';
import { rootReducer, RootState } from './rootReducer';

import { api } from '../api/baseApi';
import { api as authApi } from '../api/authApi';

const migrations = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  0: (state: any) => {
    return {
      ...state,
    };
  },
};

const persistConfig: PersistConfig<RootState> = {
  key: 'user',
  storage,
  version: 0,
  whitelist: ['user'],
  migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([api.middleware, authApi.middleware, rtkQueryErrorLogger]),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
