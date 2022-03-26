import {createAction} from '@reduxjs/toolkit';

export const incrementStep = createAction('game/incrementStep');
export const changeLocationCity = createAction<{changedCity: string}>('tab/changeLocationCity');
export const changeOffersByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeOffersByLocationCity');
