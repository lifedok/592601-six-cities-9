import { createReducer } from '@reduxjs/toolkit';
import {
  changeLocationByLocationCity,
  changeLocationCity,
  changeOffersByLocationCity, sortingOffers, sortOffers,
} from './action';
import { IOfferByCity, offersByLocationCityMockData } from '../mocks/offers-by-location-city-mock.data';
import { getCityList } from './selector';
import { SortingOffer } from "./sorting-offer";

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
      console.log('sortOffers type', type);
      const updateSortingOffers = () => SortingOffer(type);
      console.log('updateSortingOffers', updateSortingOffers());
      // const updateSortingOffers = SortingOffer(sortType);
    })
    .addCase(sortingOffers, (state, action) => {
      const sortType = action.payload.sortType;
      // const updateSortingOffers = SortingOffer(sortType);
      // console.log('updateSortingOffers', updateSortingOffers);
      // state.offers = [...updateSortingOffers] as IOfferByCity[]; // WritableDraft
    });
    // .addCase(sortingOffersByDefault, (state, action) => {
    //   // const offers = action.payload.offers;
    //   // const updateSortingOffers = offers;
    //   // console.log('sortingOffers', updateSortingOffers);
    //   state.offers = [...action.payload.offers];
    // })
    // .addCase(sortingOffersByLowToHigh, (state, action) => {
    //   const {offers} = action.payload;
    //   // Uncaught TypeError: Cannot assign to read only property '0' of object '[object Array]'
    //   const updateSortingOffers = offers.sort((a, b) => a.price - b.price);
    //   console.log('sortingOffersByLowToHigh', updateSortingOffers);
    //   state.offers = [...updateSortingOffers];
    // })
    // .addCase(sortingOffersByHighToLow, (state, action) => {
    //   const {offers} = action.payload;
    //   const updateSortingOffers = offers.sort((a, b) => b.price - a.price);
    //   console.log('sortingOffersByHighToLow', updateSortingOffers);
    //   state.offers = [...updateSortingOffers];
    // })
    // .addCase(sortingOffersByTopRatedFirst, (state, action) => {
    //   const updateSortingOffers = action.payload.offers.sort((a, b) => a.rating - b.rating);
    //   console.log('sortingOffersByTopRatedFirst', updateSortingOffers);
    //   state.offers = [...updateSortingOffers];
    // });
});

export { reducer };
