import { combineReducers } from '@reduxjs/toolkit';

import { api } from '../api/baseApi';
import { api as authApi } from '../api/authApi';

import { SystemReducer } from './system/systemSlice';
import { userReducer } from './user/userSlice';
import { adminReducer } from './admin/adminSlice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [authApi.reducerPath]: authApi.reducer,
  system: SystemReducer,
  user: userReducer,
  admin: adminReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
