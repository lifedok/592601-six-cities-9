import {createAction} from '@reduxjs/toolkit';

export const changeLocationCity = createAction<{changedCity: string}>('tab/changeLocationCity');
export const changeLocationByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeLocationByLocationCity');
export const changeOffersByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeOffersByLocationCity');

export const sortOffers = createAction<{type: string}>('sort/sortOffers');

