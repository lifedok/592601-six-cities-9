import {createAction} from '@reduxjs/toolkit';
import { IOfferByCity } from "../mocks/offers-by-location-city-mock.data";

export const changeLocationCity = createAction<{changedCity: string}>('tab/changeLocationCity');
export const changeLocationByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeLocationByLocationCity');
export const changeOffersByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeOffersByLocationCity');

export const sortingOffers = createAction<{sortType: string, offers: IOfferByCity[]}>('sort/sortingOffers');
