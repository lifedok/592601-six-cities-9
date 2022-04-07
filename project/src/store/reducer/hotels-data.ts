import {createSlice} from '@reduxjs/toolkit';
import { EReducerNameSpace } from '../../types/const';
import { initialState } from '../../types/state';

export const hotelsData = createSlice({
  name: EReducerNameSpace.DATA,
  initialState,
  reducers: {
    loadHotels: (state, action) => {
      state.hotels = action.payload;
      state.isDataLoaded = true;
    },
    loadFavoriteHotels: (state, action) => {
      state.favoriteHotels = action.payload;
    },
    loadCommentsHotel: (state, action) => {
      state.comments = action.payload;
    },
    loadNearbyHotels: (state, action) => {
      state.nearbyHotels = action.payload;
    },
  },
});

export const {loadHotels, loadCommentsHotel, loadFavoriteHotels, loadNearbyHotels} = hotelsData.actions;
