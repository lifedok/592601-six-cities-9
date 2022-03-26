import { createReducer } from '@reduxjs/toolkit';
import { changeLocationCity, changeOffersByLocationCity, incrementStep } from './action';
import { offersMockData } from "../mocks/offers-mock.data";
import { placeListData } from "../mocks/places-mock.data";


const initialState = {
  locationCity: 'Amsterdam',
  offers: offersMockData,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocationCity, (state, action) => {
      const {changedCity} = action.payload;
      state.locationCity = changedCity;
    })
    .addCase(changeOffersByLocationCity, (state, action) => {
      const {selectedLocationCity} = action.payload;
      console.log('selectedLocationCity', selectedLocationCity);
      // const place = placeList.filter((item) => item.name === selectedLocationCity)[0];
      state.offers = offersMockData;
    });
});

export { reducer };
