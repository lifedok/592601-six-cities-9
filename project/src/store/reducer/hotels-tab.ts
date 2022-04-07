import { createSlice } from '@reduxjs/toolkit';
import { EReducerNameSpace } from '../../types/const';
import { getCityList } from '../selector';
import { initialState } from '../../types/state';
import { IHotel } from "../../types/interfaces/hotel.interface";

export const hotelsTab = createSlice({
  name: EReducerNameSpace.TAB,
  initialState,
  reducers: {
    changeLocationCity: (state, action) => {
      const {changedCity} = action.payload;
      state.city.name = changedCity;
    },
    changeLocationByLocationCity: (state, action) => {
      const {data, selectedLocationCity} = action.payload;
      const locationByCity = getCityList(data).filter((item) => item.name === selectedLocationCity)[0];
      state.city.location = locationByCity.location;
    },
    changeHotelsByLocationCity: (state, action) => {
      const {data, selectedLocationCity} = action.payload;
      state.selectedTabHotels = data.filter((item: IHotel) => item.city.name === selectedLocationCity);
    },
  },
});

export const {changeLocationCity, changeLocationByLocationCity, changeHotelsByLocationCity} = hotelsTab.actions;
