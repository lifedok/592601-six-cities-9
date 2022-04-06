import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../types/enums/route.enum';
import { EReducerNameSpace } from '../../types/const';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

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
