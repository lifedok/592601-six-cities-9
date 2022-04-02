import { createReducer } from '@reduxjs/toolkit';
import {
  changeLocationByLocationCity,
  changeLocationCity,
  changeHotelsByLocationCity,
  loadHotels,
  requireAuthorization,
  sortHotels,
  loadFavoriteHotels,
  loadCommentsHotel,
  loadNearbyHotels, loadOfferHotel
} from './action';
import { getCityList } from './selector';
import { getSortingHotels } from './get-sorting-hotels';
import { AuthorizationStatus } from '../types/enums/route.enum';
import { IHotel, IPlace } from '../types/interfaces/hotel.interface';
import { IComment } from "../types/interfaces/comments.interface";

type IInitialState = {
  city: IPlace,
  hotels: IHotel[],
  selectedTabHotels: IHotel[],
  selectedOfferHotel: any,
  favoriteHotels: IHotel[],
  nearbyHotels: IHotel[],
  comments: IComment[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

const initialState: IInitialState = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
  hotels: [],
  selectedTabHotels: [],
  selectedOfferHotel: null,
  favoriteHotels: [],
  nearbyHotels: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {

  builder
    .addCase(changeLocationCity, (state, action) => {
      const {changedCity} = action.payload;
      state.city.name = changedCity;
    })
    .addCase(changeLocationByLocationCity, (state, action) => {
      const {selectedLocationCity} = action.payload;
      const locationByCity = getCityList(state.hotels).filter((item) => item.name === selectedLocationCity)[0];
      state.city.location = locationByCity.location;
    })
    .addCase(changeHotelsByLocationCity, (state, action) => {
      const {selectedLocationCity} = action.payload;
      state.selectedTabHotels = state.hotels.filter((item) => item.city.name === selectedLocationCity);
    })
    .addCase(sortHotels, (state, action) => {
      const {type} = action.payload;
      state.hotels = getSortingHotels(type, [...state.hotels]);
    })
    .addCase(loadHotels, (state, action) => {
      state.hotels = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOfferHotel, (state, action) => {
      state.selectedOfferHotel = action.payload;
    })
    .addCase(loadFavoriteHotels, (state, action) => {
      state.favoriteHotels = action.payload;
    })
    .addCase(loadCommentsHotel, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearbyHotels, (state, action) => {
      state.nearbyHotels = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
