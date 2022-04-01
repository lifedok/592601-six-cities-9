import { createReducer } from '@reduxjs/toolkit';
import {
  changeLocationByLocationCity,
  changeLocationCity,
  changeHotelsByLocationCity, loadHotels, requireAuthorization, sortHotels
} from './action';
import { getCityList } from './selector';
import { getSortingHotels } from './get-sorting-hotels';
import { AuthorizationStatus } from '../types/enums/route.enum';
import { store } from "./index";
import { IHotel, IPlace } from "../types/interfaces/hotel.interface";

type IInitialState = {
  city: IPlace,
  hotels: IHotel[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

const initialState: IInitialState = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    }
  },
  hotels: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false
};

const reducer = createReducer(initialState, (builder) => {
  // const hotels = store?.getState()?.hotels;

  builder
    .addCase(changeLocationCity, (state, action) => {
      const {changedCity} = action.payload;
      state.city.name = changedCity;
    })
    .addCase(changeLocationByLocationCity, (state, action) => {
      const {selectedLocationCity} = action.payload;
      // const locationByCity = getCityList(hotels).filter((item) => item.name === selectedLocationCity)[0];
      // state.city.location = locationByCity.location;
    })
    .addCase(changeHotelsByLocationCity, (state, action) => {
      const {selectedLocationCity} = action.payload;
      // const hotelsByLocationCity = hotels.filter((item) => item.city.name === selectedLocationCity)[0];
      // console.log('hotelsByLocationCity', hotelsByLocationCity)
      // state.hotels = hotelsByLocationCity;
    })
    .addCase(sortHotels, (state, action) => {
      const {type} = action.payload;
      state.hotels = getSortingHotels(type, [...state.hotels]);
    })
    .addCase(loadHotels, (state, action) => {
      state.hotels = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
