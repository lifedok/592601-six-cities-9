import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../types/enums/route.enum';
import { IHotel } from '../types/interfaces/hotel.interface';

export const loadHotels = createAction<IHotel[]>('data/loadHotels');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const changeLocationCity = createAction<{changedCity: string}>('tab/changeLocationCity');
export const changeLocationByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeLocationByLocationCity');
export const changeHotelsByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeHotelsByLocationCity');

export const sortHotels = createAction<{type: string}>('sort/sortHotels');

export const redirectToRoute = createAction<string>('route/redirectToRoute');
