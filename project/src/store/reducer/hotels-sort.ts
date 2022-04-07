import { createSlice } from '@reduxjs/toolkit';
import { EReducerNameSpace } from '../../types/const';
import { getSortingHotels } from '../get-sorting-hotels';
import { initialState } from "../../types/state";

export const hotelsSort = createSlice({
  name: EReducerNameSpace.SORT,
  initialState,
  reducers: {
    sortHotels: (state, action) => {
      const {type} = action.payload;
      const {hotels} = state;
      state.hotels = getSortingHotels(type, [...hotels]);
    },
  },
});

export const { sortHotels } = hotelsSort.actions;
