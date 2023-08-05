import { combineReducers } from '@reduxjs/toolkit';

import { api } from '../api/baseApi';
import { SystemReducer } from './system/systemSlice';
import { userReducer } from './user/userSlice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  system: SystemReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
