import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserInitState, IAuthData } from './userState';

export const userSlice = createSlice({
  name: 'user',
  initialState: UserInitState,
  reducers: {
    changeState: (state, { payload }: PayloadAction<IAuthData>) => {
      state.token = payload.token;
      state.userId = payload.userId;
    },
  },
});

export const { changeState } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
