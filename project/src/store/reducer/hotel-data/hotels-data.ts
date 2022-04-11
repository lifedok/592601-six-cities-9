import { createSlice } from '@reduxjs/toolkit';
import { EReducerNameSpace } from '../../../types/const';
import { HotelsData } from '../../../types/state';
import { getSortingHotels } from '../../get-sorting-hotels';
import { getCityList } from '../../selector';
import { IHotel } from '../../../types/interfaces/hotel.interface';

export const initialState: HotelsData = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
  hotels: [],
  sortingHotels: [],
  selectedTabHotels: [],
  selectedOfferHotel: null,
  favoriteHotels: [],
  nearbyHotels: [],
  comments: [],
  isDataLoaded: false,
};


export const hotelsData = createSlice({
  name: EReducerNameSpace.DATA,
  initialState,
  reducers: {
    loadHotels: (state, action) => {
      state.hotels = action.payload;
      state.sortingHotels = action.payload;
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
    sortHotels: (state, action) => {
      const {type} = action.payload;
      const hotels = state.hotels;
      const sortHotels = getSortingHotels(type, [...hotels]);
      console.log({hotels, sortHotels});
      state.sortingHotels = sortHotels;
    },
    changeLocationCity: (state, action) => {
      const {changedCity} = action.payload;
      state.city.name = changedCity;
    },
    changeLocationByLocationCity: (state, action) => {
      const {selectedLocationCity} = action.payload;
      const locationByCity = getCityList(state.hotels).filter((item) => item.name === selectedLocationCity)[0];
      state.city.location = locationByCity.location;
    },
    changeHotelsByLocationCity: (state, action) => {
      const {selectedLocationCity} = action.payload;
      state.selectedTabHotels = state.hotels.filter((item: IHotel) => item.city.name === selectedLocationCity);
    },
  },
});

export const {
  loadHotels,
  loadCommentsHotel,
  loadFavoriteHotels,
  loadNearbyHotels,
  sortHotels,
  changeLocationCity,
  changeLocationByLocationCity,
  changeHotelsByLocationCity,
} = hotelsData.actions;
