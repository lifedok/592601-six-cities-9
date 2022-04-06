import { createSlice } from '@reduxjs/toolkit';
import { EReducerNameSpace } from '../../types/const';
import { HotelsTabData } from '../../types/state';
import { getCityList } from '../selector';
import { IHotel } from '../../types/interfaces/hotel.interface';

const initialState: HotelsTabData = {
  hotels: [],
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
  selectedTabHotels: [],
};

export const hotelsTab = createSlice({
  name: EReducerNameSpace.SORT,
  initialState,
  reducers: {
    changeLocationCity: (state, action) => {
      const {changedCity} = action.payload;
      state.city.name = changedCity;
    },
    changeLocationByLocationCity: (state, action) => {
      const {selectedLocationCity} = action.payload;
      const {filter} = getCityList(state.hotels as IHotel[]);
      const locationByCity = filter((item) => item.name === selectedLocationCity)[0];
      state.city.location = locationByCity.location;
    },
    changeHotelsByLocationCity: (state, action) => {
      const {selectedLocationCity} = action.payload;
      const {filter} = state.hotels as IHotel[];
      state.selectedTabHotels = filter((item) => item.city.name === selectedLocationCity);
    },
  },
});

export const {changeLocationCity, changeLocationByLocationCity, changeHotelsByLocationCity} = hotelsTab.actions;
