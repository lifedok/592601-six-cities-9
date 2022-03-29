import { createReducer } from '@reduxjs/toolkit';
import {
  changeLocationByLocationCity,
  changeLocationCity,
  changeOffersByLocationCity, sortOffers
} from './action';
import { offersByLocationCityMockData } from '../mocks/offers-by-location-city-mock.data';
import { getCityList } from './selector';
import { getSortingOffers } from './get-sorting-offers';

const initialState = {
  locationCity: offersByLocationCityMockData[3].city,
  offers: offersByLocationCityMockData[3].offersByLocationCity,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocationCity, (state, action) => {
      const {changedCity} = action.payload;
      state.locationCity.name = changedCity;
    })
    .addCase(changeLocationByLocationCity, (state, action) => {
      const {selectedLocationCity} = action.payload;
      const locationByCity = getCityList(offersByLocationCityMockData).filter((item) => item.name === selectedLocationCity)[0];
      state.locationCity.location = locationByCity.location;
    })
    .addCase(changeOffersByLocationCity, (state, action) => {
      const {selectedLocationCity} = action.payload;
      const offerByLocationCity = offersByLocationCityMockData.filter((item) => item.city.name === selectedLocationCity)[0];
      state.offers = offerByLocationCity.offersByLocationCity;
    })
    .addCase(sortOffers, (state, action) => {
      const {type} = action.payload;
      state.offers = getSortingOffers(type, [...state.offers]);
    });
});

export { reducer };
