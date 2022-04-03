import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../types/enums/route.enum';
import { IHotel } from '../types/interfaces/hotel.interface';
import { IComment } from '../types/interfaces/comments.interface';

export const loadHotels = createAction<IHotel[]>('data/loadHotels');
export const loadOfferHotel = createAction<IHotel[]>('data/loadOfferHotel');
export const loadFavoriteHotels = createAction<IHotel[]>('data/fetchFavoriteHotels');
export const loadCommentsHotel = createAction<IComment[]>('data/fetchCommentsHotel');
export const loadNearbyHotels = createAction<IHotel[]>('data/loadNearbyHotels');


export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const changeLocationCity = createAction<{changedCity: string}>('tab/changeLocationCity');
export const changeLocationByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeLocationByLocationCity');
export const changeHotelsByLocationCity = createAction<{selectedLocationCity: string}>('tab/changeHotelsByLocationCity');

export const sortHotels = createAction<{type: string}>('sort/sortHotels');

export const redirectToRoute = createAction<string>('route/redirectToRoute');
