import { createSlice } from '@reduxjs/toolkit';
import { EReducerNameSpace } from '../../types/const';
import { HotelsSortData } from '../../types/state';
import { getSortingHotels } from '../get-sorting-hotels';

const initialState: HotelsSortData = {
  hotels: [],
  selectedTabHotels: [],
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
};

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
