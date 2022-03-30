import {createAction} from '@reduxjs/toolkit';
import { IOfferByCity } from '../mocks/offers-by-location-city-mock.data';
import { AuthorizationStatus } from '../types/enums/route.enum';

export const loadOffers = createAction<IOfferByCity[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const changeLocationCity = createAction<{changedCity: string}>('tab/changeLocationCity');
export const changeLocationByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeLocationByLocationCity');
export const changeOffersByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeOffersByLocationCity');

export const sortOffers = createAction<{type: string}>('sort/sortOffers');

