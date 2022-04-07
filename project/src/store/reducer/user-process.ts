import { createSlice } from '@reduxjs/toolkit';
import { EReducerNameSpace } from '../../types/const';
import { initialState } from '../../types/state';


export const userProcess = createSlice({
  name: EReducerNameSpace.USER,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const {requireAuthorization} = userProcess.actions;
