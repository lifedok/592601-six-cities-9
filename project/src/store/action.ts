import {createAction} from '@reduxjs/toolkit';
import { IOfferByCity } from "../mocks/offers-by-location-city-mock.data";

export const changeLocationCity = createAction<{changedCity: string}>('tab/changeLocationCity');
export const changeLocationByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeLocationByLocationCity');
export const changeOffersByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeOffersByLocationCity');

export const sortingOffersByDefault = createAction<{offers: IOfferByCity[]}>('sort/sortingOffersByDefault');
export const sortingOffersByLowToHigh = createAction<{offers: IOfferByCity[]}>('sort/sortingOffersByLowToHigh');
export const sortingOffersByHighToLow = createAction<{offers: IOfferByCity[]}>('sort/sortingOffersByHighToLow');
export const sortingOffersByTopRatedFirst = createAction<{offers: IOfferByCity[]}>('sort/sortingOffersByTopRatedFirst');
