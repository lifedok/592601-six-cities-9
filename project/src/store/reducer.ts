import {createReducer} from '@reduxjs/toolkit';
import { incrementStep } from './action';
import { offersMockData } from "../mocks/offers.data";
import { FIRST_GAME_STEP } from "../const";

const STEP_COUNT = 1;

const initialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
  // name: 'Amsterdam',
  // offers: offersMockData,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementStep, (state) => {
      state.step = state.step + STEP_COUNT;
    });
});

export {reducer};
