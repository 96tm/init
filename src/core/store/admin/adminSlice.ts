import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AdminInitState, IAuthData } from './adminState';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: AdminInitState,
  reducers: {
    changeState: (state, { payload }: PayloadAction<IAuthData>) => {
      state.token = payload.token;
    },
  },
});

export const { changeState } = adminSlice.actions;
export const { reducer: adminReducer } = adminSlice;
